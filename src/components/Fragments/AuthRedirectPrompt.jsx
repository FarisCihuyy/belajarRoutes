const AuthRedirectPrompt = ({ question, linkText, href }) => {
  return (
    <p className="text-center text-[12px] text-gray-400 mt-4">
      {question}
      <span className="text-blue-700 font-medium hover:underline">
        <a href={href}> {linkText}</a>
      </span>
    </p>
  );
};

export default AuthRedirectPrompt;
