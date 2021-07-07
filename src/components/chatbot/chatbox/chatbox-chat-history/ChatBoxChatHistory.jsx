import React from "react";
import styles from "./chatbox-chat-history-styles.module.scss";
import UserChat from "./UserChat";
export default function ChatBoxChatHistory({ chatHistory }) {
  return (
    <div className={styles.chat_history}>
      {chatHistory.map((el, index) => {
        return <UserChat key={"user" + index} message={el.message} />;
      })}
    </div>
  );
}
