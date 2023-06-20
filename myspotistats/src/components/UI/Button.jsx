import React from 'react'
import styles from '../../assets/scss/UI/Button.module.scss'

console.log(styles)

const Button = props => {
  return (
    <button
        className={`${styles.button} ${props.className ? styles.active : ''} ${props.mode ? styles[`mode__${props.mode}`] : ''}`}
        type={props.type || 'button'}
        onClick={props.onClick}
    >
        {props.children}
    </button>
  )
}

export default Button