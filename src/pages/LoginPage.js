import Card from "../components/form/card";
import LoginSubCard from "../components/form/login-sub-card";
import LoginForm from "../components/form/login-form";

function Login() {
  return (
    <Card
      component={
        <>
          <LoginSubCard
            bgColor="bg-primary"
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
