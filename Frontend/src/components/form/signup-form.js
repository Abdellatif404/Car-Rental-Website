import { useRef } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import FormButton from "./form-button";
import FormInput from "./form-input";

const SignUpForm = () => {
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

  const firstname = useRef();
  const lastname = useRef();
  const telephone = useRef();
  const email = useRef();
  const password = useRef();
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function createUserAcccount(e) {
    e.preventDefault();

    if (!password.current.value.match(passwordRegEx))
      return toastMessage(
        "Password must be minimum 8 characters, at least 1 letter and 1 number."
      );

    const hashedPassword = bcrypt.hashSync(password.current.value);
    axios
      .post("http://127.0.0.1:8000/api/signup", {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        telephone: telephone.current.value,
        email: email.current.value,
        password: hashedPassword,
      })
      .then(() => {
        toastMessage(
          "We've created your account for you.",
          "success",
          "Account created."
        );
        navigate("/login");
      })
      .catch((error) => toastMessage(error.response.data.message));
  }

  return (
    <div className="col-md-6 col-lg-6 p-md-5 px-4 py-5">
      <form onSubmit={createUserAcccount}>
        <FormInput name="firstname" type="text" refe={firstname} />
        <FormInput name="lastname" type="text" refe={lastname} />
        <FormInput name="telephone" type="tel" refe={telephone} />
        <FormInput name="email" type="email" refe={email} />
        <FormInput name="password" type="password" refe={password} />

        <FormButton bgColor="btn-secondary" btnText="Create account" />
      </form>
    </div>
  );
};

export default SignUpForm;
