import React from "react";
import styles from '../../assets/scss/UI/Checkbox.module.scss'

const Checkbox = ({ label, value, onChange, id }) => {
  return (
    <>
      <label htmlFor={id} className={styles.checkbox}>
        {label}
        <input type="checkbox" id={id} checked={value} onChange={onChange} />
        <span className={styles.checkmark}></span>
      </label>
    </>
  );
};

export default Checkbox;
