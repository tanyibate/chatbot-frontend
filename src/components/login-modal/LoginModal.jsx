import React, { useState } from "react";
import styles from "./login-modal-styles.module.scss";
import axios from "axios";
export default function LoginModal({ setModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticationAPI = "http://localhost:4000/login";
  function login() {
    axios
      .post(
        authenticationAPI,
        { email: email, password: password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setModal(false);
      });
  }
  function handleChange(event) {
    if (event.target.id === "email") setEmail(event.target.value);
    if (event.target.id === "password") setPassword(event.target.value);
  }
  return (
    <div className={styles.modal_background}>
      <h1 onClick={() => setModal(false)}>X</h1>
      <div className={styles.modal}>
        <input type="email" id="email" onChange={handleChange} />
        <input type="password" id="password" onChange={handleChange} />
        <button onClick={login}>Submit</button>
      </div>
    </div>
  );
}
