import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogIn = () => {
  return (
    <form>
      <InputForm label="email" type="email" placeholder="example@gmail.com" />
      <InputForm label="password" type="password" placeholder="*****" />
      <a href="/" className="block text-[12px] text-blue-700 font-semibold text-right mb-4">
        Forgot Password?
      </a>

      <Button type="submit" customStyle={"w-full bg-blue-700 text-white my-4 hover:bg-blue-800"}>
        Log In
      </Button>
    </form>
  );
};

export default FormLogIn;
