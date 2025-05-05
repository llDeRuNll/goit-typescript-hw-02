import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";
function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast("Enter some text");
      return;
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input onChange={handleChange} value={value} className={s.input} />
        <button type="submit" className={s.button}>
          <FiSearch size="16px" />
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
