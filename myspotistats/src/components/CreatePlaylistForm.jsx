import React, { useState } from "react";
import useInput from "../hooks/use-input";
import Checkbox from "./UI/Checkbox";
import styles from "../assets/scss/components/Form.module.scss";
import Button from './UI/Button'

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

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const formSubmission = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log('nowa playlista')

    resetName();
  };

  const checkboxChangeHandler = () => {
    setCheckboxChecked((prevState) => !prevState);

    console.log(checkboxChecked);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Playlist name</label>
        <br />
        <input
          className={styles.form__input}
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameHandler}
          onBlur={enteredNameBlurHandler}
        />
        {enteredNameHasError && (
          <p className={styles.form__error}>Name must not be empty</p>
        )}
      </div>
      <div>
        <label htmlFor="name">Description</label>
        <br />
        <input
          className={styles.form__input}
          type="text"
          id="description"
          value={enteredDescription}
          onChange={enteredDescriptionHandler}
          onBlur={enteredDescriptionBlurHandler}
        />
        {/* {enteredDescriptionHasError && (
          <p className={styles.form__error}>Description must not be empty</p>
        )} */}
      </div>
      <div>
        <Checkbox
          label={"Public playlist"}
          value={checkboxChecked}
          id={"accessibility"}
          onChange={checkboxChangeHandler}
        />
      </div>
      <div className={styles.form__actions}>
        <Button mode="white" disabled={!formIsValid} onClick={formSubmission}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CreatePlaylistForm;
