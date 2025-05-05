import { HashLoader } from "react-spinners";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.loader}>
      <HashLoader color="#black" size="100px" />
    </div>
  );
};

export default Loader;
