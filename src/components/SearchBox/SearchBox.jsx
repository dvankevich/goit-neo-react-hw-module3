import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ search, handleSearch }) => {
  const searchInputId = useId();
  const clearSearch = () => {
    handleSearch("");
  };

  return (
    <div className={css.box}>
      <label htmlFor={searchInputId} aria-label="Find contacts by name field">
        Find contacts by name
      </label>
      <input
        className={css.field}
        id={searchInputId}
        onChange={(evt) => handleSearch(evt.target.value)}
        value={search}
      ></input>
      <button
        className={css.btn}
        onClick={clearSearch}
        aria-label="Clear search button"
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBox;
