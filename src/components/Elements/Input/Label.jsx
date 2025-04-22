const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="font-medium capitalize">
      {children}
    </label>
  );
};

export default Label;
