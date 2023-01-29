import Card from "../components/form/card";
import SubCard from "../components/form/sub-card";
import LoginForm from "../components/form/login-form";
import Navbar from "../components/navbar/Navbar";

function Login() {
  return (
    <>
      <Navbar/>
      <Card
        component={
          <>
            <SubCard
              textColor="text-blue"
              bgColor="bg-primary"
              route="/signup"
              question="Don't have an account"
              btnName="Sign Up"
            />
            <LoginForm />
          </>
        }
      />
    </>
  );
}

export default Login;
