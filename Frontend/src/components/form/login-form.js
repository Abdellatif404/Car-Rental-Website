import FormButton from "./form-button";
import { useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";

const LoginForm = () => {
  const toast = useToast();
  const email = useRef();
  const password = useRef();

  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };

  const toastMessage = (message, type = "error", title = "Error occured.") => {
    return toast({
      title: title,
      description: message,
      status: type,
      duration: 4000,
      isClosable: true,
    });
  };

  async function onSubmitButton(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://127.0.0.1:8000/api/login", {
          email: email.current.value,
        })
        .then(function (response) {
          const verifyPassword = bcrypt.compareSync(
            password.current.value,
            response.data.data
          );
          console.log(verifyPassword);
          if (verifyPassword) {
            toastMessage(
              "You've logged in successfully.",
              "success",
              "Welcome again."
            );
            navigate("/cars");
          } else {
            toastMessage("Wrong password try again.");
          }
        });
    } catch (e) {
      toastMessage("Something wrong.");
    }
  }

  return (
    <div className="col-md-6 col-lg-6 p-md-5 px-4 py-5">
      <form onSubmit={onSubmitButton}>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            placeholder="Email"
            required
            ref={email}
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            placeholder="Password"
            required
            ref={password}
          />
        </div>

        <div className="form-group">
          <FormButton bgColor="btn-primary" btnText="Sign In" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
