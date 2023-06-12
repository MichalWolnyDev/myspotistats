import React from 'react'
import styles from './Button.module.scss'

console.log(styles)

const Button = props => {
  return (
    <button
        className={`${styles.button} ${props.className ? styles.active : ''} `}
        type={props.type || 'button'}
        onClick={props.onClick}
    >
        {props.children}
    </button>
  )
}

export default Button