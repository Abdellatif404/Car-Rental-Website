import Card from "../components/form/card";
import LoginCard from "../components/form/login-card";
import LoginForm from "../components/form/login-form";

function Login() {
  return (
    <Card
      component={
        <>
          <LoginCard
            route="/signup"
            msg="Don't have an account"
            btnMsg="Sign Up"
          />
          <LoginForm />
        </>
      }
    />
  );
}

export default Login;
