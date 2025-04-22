import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormSignUp = () => {
  return (
    <form>
      <InputForm label="email" type="email" placeholder="example@gmail.com" />
      <InputForm label="password" type="password" placeholder="*****" />
      <InputForm
        name="confirm password"
        label="confirmPassword"
        type="password"
        placeholder="*****"
      />
      <Button type="submit" customStyle={"w-full bg-blue-700 text-white my-4 hover:bg-blue-800"}>
        Sign Up
      </Button>
    </form>
  );
};

export default FormSignUp;
