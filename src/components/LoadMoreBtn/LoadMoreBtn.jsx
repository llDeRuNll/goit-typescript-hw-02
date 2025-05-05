import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <div className={s.buttonWrapper}>
      <button onClick={handleClick} className={s.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
