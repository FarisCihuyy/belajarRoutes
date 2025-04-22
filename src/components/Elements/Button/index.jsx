const Button = ({ children, customStyle, type = "button" }) => {
  return (
    <button
      type={type}
      className={`${customStyle} py-2 px-4 rounded cursor-pointer transition-colors`}
    >
      {children}
    </button>
  );
};

export default Button;
