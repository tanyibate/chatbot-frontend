import React from "react";
import styles from "./chatbox-chat-history-styles.module.scss";
import UserChat from "./UserChat";
import BotChat from "./BotChat";
export default function ChatBoxChatHistory({ chatHistory }) {
  return (
    <div className={styles.chat_history} id="chathistory">
      {chatHistory.map((el, index) => {
        // loop through chat history and output the chat history
        if (el.type === "user")
          return <UserChat key={"user" + index} message={el.message} />; // if message is from user return UserChat
        return <BotChat key={"bot" + index} message={el.message} />; // default return bot chat
      })}
    </div>
  );
}
