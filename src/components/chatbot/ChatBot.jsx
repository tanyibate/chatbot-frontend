import React, { useState } from "react";
import styles from "./chatbot-styles.module.scss";
import ChatBox from "./chatbox/ChatBox";
export default function ChatBot() {
  const [chatBotActive, setChatBotActive] = useState(false); // to activate/disable chatbot
  return (
    <div>
      <ChatBox chatBotActive={chatBotActive} />
      <div
        className={styles.chatbot_maximizer}
        onClick={() => {
          setChatBotActive(!chatBotActive); // will change chatBotActive
        }}
      >
        {
          !chatBotActive && <img src="images/messenger.svg" alt="" /> /*
          image shown in maximizer changes depening on wether the chatbot is active or not
        */
        }
        {chatBotActive && <img src="images/close.svg" alt="" />}
      </div>
    </div>
  );
}
