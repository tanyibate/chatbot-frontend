import React, { useState } from "react";
import styles from "./login-modal-styles.module.scss";
import axios from "axios";
export default function LoginModal({ setModal }) {
  const [email, setEmail] = useState("");
  const [register, setRegister] = useState(false);
  const [password, setPassword] = useState("");

  const authenticationAPI = `${process.env.REACT_APP_BACKEND_API_URL}/login`;
  const registerAPI = `${process.env.REACT_APP_BACKEND_API_URL}/register`;

  function loginOrRegister() {
    let apiUrl;
    if (register) apiUrl = registerAPI;
    else apiUrl = authenticationAPI;
    axios
      .post(
        apiUrl,
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
    if (event.target.id === "checkbox") setRegister(event.target.checked);
  }
  return (
    <div className={styles.modal_background}>
      <h1 onClick={() => setModal(false)}>X</h1>
      <div className={styles.modal}>
        <div style={{ display: "flex", alignItems: "center" }}>
          Login &nbsp;
          <label className="switch">
            <input type="checkbox" id="checkbox" onChange={handleChange} />
            <span className="slider round"></span>
          </label>
          &nbsp; Register
        </div>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleChange} />
        <br />
        <button onClick={loginOrRegister}>Submit</button>
      </div>
    </div>
  );
}
