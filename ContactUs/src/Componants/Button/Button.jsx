import React from 'react'
import { RiMessage2Line } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button className={styles.primary_btn}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default Button