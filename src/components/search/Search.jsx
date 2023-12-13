import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch }) => {
  return (
    
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="   Search for characters..."
        type="text"
        className={styles.input}
      />
    
  );
};

export default Search;
