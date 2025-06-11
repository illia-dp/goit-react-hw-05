import { useState } from "react";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return toast.error("Input some text");
    onSubmit(value);

    setValue("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        onChange={handleChange}
        value={value}
      />
      <button className={css.button} type="submit">
        <IoSearch className={css.icon} size="16px" />
        Search
      </button>
    </form>
  );
};

export default SearchForm;
