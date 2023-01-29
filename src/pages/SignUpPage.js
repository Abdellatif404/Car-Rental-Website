import Card from "../components/form/card";
import SubCard from "../components/form/sub-card";
import SignUpForm from "../components/form/signup-form";
import Navbar from "../components/navbar/Navbar";

function SignUp() {
  return (
    <>
      <Navbar />
      <Card
        component={
          <>
            <SubCard
              textColor="text-orange"
              bgColor="bg-secondary"
              route="/login"
              question="Already a user"
              btnName="Log In"
            />

            <SignUpForm />
          </>
        }
      />
    </>
  );
}

export default SignUp;
