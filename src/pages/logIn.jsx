import AuthRedirectPrompt from "../components/Fragments/AuthRedirectPrompt";
import FormHeader from "../components/Fragments/FormHeader";
import FormLogin from "../components/Fragments/FormLogIn";
import GoogleButton from "../components/Fragments/GoogleButton";
import OrDevider from "../components/Elements/OrDevider";
const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-96 border px-8 py-4 rounded-xl bg-white">
        <FormHeader header="Log In" subHeader="Let's schedule with confidence">
          to Zonely
        </FormHeader>
        <GoogleButton span="Log In" />
        <OrDevider />
        <FormLogin />
        <AuthRedirectPrompt question="Don't have an account?" linkText="Sign Up" href="/login" />
      </div>
    </div>
  );
};

export default LoginPage;
