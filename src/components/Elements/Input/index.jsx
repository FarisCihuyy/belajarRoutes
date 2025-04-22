import Input from "./Input";
import Label from "./Label";

const InputForm = ({ name, label, type, placeholder }) => {
  const title = name ? name : label;
  return (
    <div className="flex flex-col gap-1 mb-2">
      <Label htmlFor={label}>{title}</Label>
      <Input type={type} id={label} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
