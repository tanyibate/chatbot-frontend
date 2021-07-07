import React, { useState } from "react";
import styles from "./chatbox-styles.module.scss";
import ChatBoxHeader from "./chatbox-header/ChatBoxHeader";
import ChatBoxChatHistory from "./chatbox-chat-history/ChatBoxChatHistory";
import ChatBoxFooter from "./chatbox-footer/ChatBoxFooter";

export default function ChatBox() {
  const [chatHistory, setChatHistory] = useState([
    {
      type: "user",
      message: "test",
    },
  ]);
  return (
    <div className={styles.chatbox}>
      <ChatBoxHeader></ChatBoxHeader>
      <ChatBoxChatHistory
        chatHistory={chatHistory}
        //key={chatHistory.length + "chatBox"}
      ></ChatBoxChatHistory>
      <ChatBoxFooter
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
      ></ChatBoxFooter>
    </div>
  );
}
