import { HashLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <HashLoader color="black" size={100} />
    </div>
  );
};

export default Loader;
