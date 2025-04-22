const Input = ({ type, id, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className="text-sm py-2 px-4 rounded border border-gray-300 focus:outline-1 outline-gray-400 placeholder:text-gray-400"
      required
    />
  );
};

export default Input;
