import AuthRedirectPrompt from "../components/Fragments/AuthRedirectPrompt";
import FormHeader from "../components/Fragments/FormHeader";
import FormSignUp from "../components/Fragments/FormSignUp";
import GoogleButton from "../components/Fragments/GoogleButton";
import OrDevider from "../components/Elements/OrDevider";

const SignUpPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-96 border px-8 py-4 rounded-xl bg-white">
        <FormHeader header="Sign Up" subHeader="Ease of scheduling across the globe">
          to Join Zonely
        </FormHeader>
        <GoogleButton span="Sign Up" />
        <OrDevider />
        <FormSignUp />
        <p className="text-center text-[12px] text-gray-400 px-5">
          By clicking "Sign Up", you acknowledge that you have read and understood, and agree to
          Zonely's{" "}
          <span className="text-blue-700 font-medium cursor-pointer hover:underline">
            Terms and Conditions
          </span>{" "}
          and{" "}
          <span className="text-blue-700 font-medium cursor-pointer hover:underline">
            Privacy Policy
          </span>
        </p>
        <AuthRedirectPrompt question="Already have an account?" linkText="Log In" href="/login" />
      </div>
    </div>
  );
};

export default SignUpPage;
