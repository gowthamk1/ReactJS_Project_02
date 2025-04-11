import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { RiMessage2Line } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  // Live form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  // Submitted values for preview
  const [submittedName, setSubmittedName] = useState("");      // ✅
  const [submittedEmail, setSubmittedEmail] = useState("");    // ✅
  const [submittedText, setSubmittedText] = useState("");      // ✅

  const onSubmit = (event) => {
    event.preventDefault();

    // ✅ Copy current input values to submitted state
    setSubmittedName(name);
    setSubmittedEmail(email);
    setSubmittedText(text);

    console.log("Submitted:", { name, email, text });
  };

  const onViaCallSubmit = () => {
    console.log("Calling");
  };

  const onViaChat = () => {
    console.log("Message sent");
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button onClick={onViaChat} text="VIA SUPPORT CHAT" icon={<RiMessage2Line />} />
          <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<IoCallSharp />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail />} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Enter your message:</label>
            <textarea
              name="text"
              rows={8}
              placeholder="Write your message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <Button text="SUBMIT" />
          </div>
          <div style={{ marginTop: "1rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <strong>Preview:</strong> Name: {submittedName} | Email: {submittedEmail} | Message: {submittedText}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/ContactImage.svg" alt="Contact Image" />
      </div>
    </section>
  );
};

export default ContactForm;
