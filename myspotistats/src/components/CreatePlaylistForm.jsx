import React from "react";
import useInput from "../hooks/use-input";
import styles from "./Form.module.scss"

const isNotEmpty = (value) => value.trim() !== "";

const CreatePlaylistForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: enteredNameHandler,
    inputBlurHandler: enteredNameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: enteredDescriptionHasError,
    valueChangeHandler: enteredDescriptionHandler,
    inputBlurHandler: enteredDescriptionBlurHandler,
    reset: resetDescription,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if(enteredNameIsValid){
    formIsValid = true
  }

  const formSubmission = e => {
    e.preventDefault();

    if(!formIsValid){
        return;
    }

    resetName();
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Playlist name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameHandler}
          onBlur={enteredNameBlurHandler}
        />
        {enteredNameHasError && <p className={styles.form__error}>Name must not be empty</p>}
      </div>
      <div>
      <label htmlFor="name">Description</label>
        <input
          type="text"
          id="description"
          value={enteredDescription}
          onChange={enteredDescriptionHandler}
          onBlur={enteredDescriptionBlurHandler}
        />
        {enteredDescriptionHasError && <p className={styles.form__error}>Description must not be empty</p>}
      </div>
      <div className={styles.form__actions}>
        <button disabled={!formIsValid}>
            Submit
        </button>
      </div>
    </form>
  );
};

export default CreatePlaylistForm;