import React, { useState } from "react";
import styles from "./chatbot-styles.module.scss";
import ChatBox from "./chatbox/ChatBox";
export default function ChatBot() {
  const [chatBotActive, setChatBotActive] = useState(false); // to activate/disable chatbot
  return (
    <div>
      {chatBotActive && <ChatBox />}
      <div
        className={styles.chatbot_maximizer}
        onClick={() => {
          setChatBotActive(!chatBotActive); // will change chatBotActive
        }}
      >
        <img src="images/messenger.svg" alt="" />
      </div>
    </div>
  );
}
