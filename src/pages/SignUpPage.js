import Card from "../components/form/card";
import LoginCard from "../components/form/login-card";
import SignUpForm from "../components/form/signup-form";

function SignUp() {
  return (
    <Card
      component={
        <>
          <LoginCard
            route="/login"
            styleClass="signup"
            msg="Already a user"
            btnMsg="Log In"
          />

          <SignUpForm />
        </>
      }
    />
  );
}

export default SignUp;
