import React from "react";
import styles from "./Search.module.scss";
import Pagination from "../pagination/Pagination";

const Search = ({setSearch, search, setPageNumber}) => {
  return (
    <input
      placeholder=" Search for characters..."
      type="text"
      className={styles.input}
      onChange={(e) => {
        setSearch(e.target.value);
        setPageNumber(1)
      }}
    />
  )
    }
 

export default Search;
