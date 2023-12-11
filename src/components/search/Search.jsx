import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch }) => {
  return (
    <form className="">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        type="text"
        className={styles.input}
      />
      <button className={`${styles.btn}btn btn-primary search-button fs-5`}>
        Search
      </button>
    </form>
  );
};

export default Search;
