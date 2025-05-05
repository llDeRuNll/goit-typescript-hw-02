import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
  return (
    <div className={s.buttonWrapper}>
      <button onClick={handleClick} className={s.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
