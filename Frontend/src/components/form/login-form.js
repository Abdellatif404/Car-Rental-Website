import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import FormButton from "./form-button";
import FormInput from "./form-input";

const LoginForm = () => {
  const navigation = useNavigate();
  const navigate = (route) => navigation(route);
  const toast = useToast();
  const toastMessage = (message, type = "error", title = "Error occured.") => {
    return toast({
      title: title,
      description: message,
      status: type,
      duration: 4000,
      isClosable: true,
    });
  };

  const email = useRef();
  const password = useRef();

  function Login(e) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: email.current.value,
      })
      .then((response) => {
        const verifyPassword = bcrypt.compareSync(
          password.current.value,
          response.data.data
        );
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
      })
      .catch(() => toastMessage("Wrong Email try again."));
  }

  return (
    <div className="col-md-6 col-lg-6 p-md-5 px-4 py-5">
      <form onSubmit={Login}>
        <FormInput name="email" type="email" refe={email} />
        <FormInput name="password" type="password" refe={password} />

        <FormButton bgColor="btn-primary" btnText="Sign In" />
      </form>
    </div>
  );
};

export default LoginForm;
