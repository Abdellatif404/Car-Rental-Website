import Card from "../components/form/card";
import LoginCard from "../components/form/login-card";
import SignInForm from "../components/form/login-form";

function Login() {
  return (
    <Card
      component={
        <>
          <LoginCard
            route="/signup"
            styleClass=""
            msg="Don't have an account"
            btnMsg="Sign Up"
          />
          <SignInForm />
        </>
      }
    />
  );
}

export default Login;
