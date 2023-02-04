import FormButton from "./form-button";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const toast = useToast();
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };

  const firstname = useRef();
  const lastname = useRef();
  const telephone = useRef();
  const email = useRef();
  const password = useRef();

  const onSubmitButton = (e) => {
    e.preventDefault();

    const hashedPassword = bcrypt.hashSync(password.current.value);

    axios
      .post("http://127.0.0.1:8000/api/signup", {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        telephone: telephone.current.value,
        email: email.current.value,
        password: hashedPassword,
      })
      .then(function () {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
      })
      .catch(function (error) {
        toast({
          title: "Error occured.",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <div className="col-md-6 col-lg-6 p-md-5 px-4 py-5">
      <form onSubmit={onSubmitButton}>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="firstname">
            FirstName
          </label>
          <input
            className="form-input"
            type="text"
            id="firstname"
            placeholder="First name"
            ref={firstname}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="lastname">
            LastName
          </label>
          <input
            className="form-input"
            type="text"
            id="lastname"
            placeholder="Last Name"
            ref={lastname}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="tel">
            Phone number
          </label>
          <input
            className="form-input"
            type="tel"
            id="tel"
            placeholder="Phone number"
            ref={telephone}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email"
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
            ref={password}
          />
        </div>
        <div className="form-group">
          <FormButton bgColor="btn-secondary" btnText="Create account" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
