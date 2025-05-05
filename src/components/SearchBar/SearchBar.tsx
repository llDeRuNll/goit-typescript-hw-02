import { useState, ChangeEvent, FormEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        <input
          type="text"
          onChange={handleChange}
          value={value}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          <FiSearch size="16px" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
