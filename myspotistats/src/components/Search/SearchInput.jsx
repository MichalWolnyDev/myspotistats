import React from "react";
import styles from "../../assets/scss/components/SearchInput.module.scss";

const SearchInput = (props) => {


  return (
    <input
      type="text"
      className={styles.search}
      placeholder="What do you want to listen?"
      onChange={props.onQueryChange}
    />
  );
};

export default SearchInput;
