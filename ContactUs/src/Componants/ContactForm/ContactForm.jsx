import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { RiMessage2Line } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";

const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<RiMessage2Line />} />
                <Button text="VIA CALL" icon={<IoCallSharp />}/>
            </div> 
        </div>
        <div className={styles.contact_image}>
            <img src="" alt="" />
        </div>
    </section>
  )
}

export default ContactForm