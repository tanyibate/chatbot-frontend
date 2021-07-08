import React from "react";
import styles from "./chatbox-chat-history-styles.module.scss";

export default function BotChat({ message }) {
  return (
    <div className={styles.bot_chat_container}>
      <img src="images/customer-service.svg" alt="" />
      <div className={styles.bot_chat}>{message}</div>
    </div>
  );
}
