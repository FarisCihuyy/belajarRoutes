const HeaderForm = ({ header, subHeader, children }) => {
  return (
    <>
      <h2 className="font-bold text-xl text-center mb-1">
        <span className="text-blue-700">{header} </span>
        {children}
      </h2>
      <p className="text-center text-gray-400 mb-6">{subHeader}</p>
    </>
  );
};

export default HeaderForm;
