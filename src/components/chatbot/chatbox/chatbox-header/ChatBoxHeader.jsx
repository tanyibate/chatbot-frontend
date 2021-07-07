import React from "react";
import styles from "./chatbox-header-styles.module.scss";

export default function ChatBoxHeader() {
  return (
    <div className={styles.chatbox_header}>
      <div className={styles.chatbox_header_agent}>
        <img src="images/customer-service.svg" alt="" />
        <h3>Ava</h3>
      </div>
      <div className={styles.chatbox_header_settings}>
        <img src="images/more.svg" alt="" />
      </div>
    </div>
  );
}
