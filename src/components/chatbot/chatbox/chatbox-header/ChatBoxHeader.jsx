import React from "react";
import styles from "./chatbox-header-styles.module.scss";

export default function ChatBoxHeader({ isTyping, darkMode, setDarkMode }) {
  return (
    <div className={styles.chatbox_header}>
      <div className={styles.chatbox_header_agent}>
        <img src="images/customer-service.svg" alt="" />
        <div className={styles.chatbox_header_text}>
          <h3>Ava</h3>
          {isTyping && <p> &nbsp;is typing...</p>}
        </div>
      </div>
      <div className={styles.chatbox_header_settings}>
        <img src="images/more.svg" alt="" />
      </div>
    </div>
  );
}
