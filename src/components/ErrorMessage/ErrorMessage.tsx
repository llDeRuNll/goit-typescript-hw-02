import s from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={s.errorMessage}>
      Something went wrong. Please try again later
    </div>
  );
};

export default ErrorMessage;
