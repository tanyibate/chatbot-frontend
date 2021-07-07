import React from "react";
import styles from "./chatbox-chat-history-styles.module.scss";

export default function UserChat({ message }) {
  return <div className={styles.user_chat}>{message}</div>;
}
