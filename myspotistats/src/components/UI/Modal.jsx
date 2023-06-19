import React from "react";
import styles from "./Modal.module.scss";
import Exit from "../Svg/Exit";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
            <h1>
                {props.title}
            </h1>
        </div>
        <div className={styles.modal__close} onClick={props.onCloseModal}>
          <Exit />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
