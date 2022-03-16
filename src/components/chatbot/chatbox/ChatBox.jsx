import React, { useState, useEffect } from "react";
import styles from "./chatbox-styles.module.scss";
import ChatBoxHeader from "./chatbox-header/ChatBoxHeader";
import ChatBoxChatHistory from "./chatbox-chat-history/ChatBoxChatHistory";
import ChatBoxFooter from "./chatbox-footer/ChatBoxFooter";
import axios from "axios";
import cx from "classnames";

export default function ChatBox({ chatBotActive }) {
  const [chatHistory, setChatHistory] = useState([
    {
      type: "Bot",
      message: "Hello, please let us know of any queries you may have.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (chatHistory[chatHistory.length - 1].type === "user") {
      getResponse(chatHistory[chatHistory.length - 1].message);
    }
    /* Active looks for an update to chatHistory if the most recent message was a user message
    the message should be send to the server so the AI can return an answer
*/
    var objDiv = document.getElementById("chathistory");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [
    chatHistory,
  ]); /* scroll to the bottom of chat history so newest message will always be in display  
  when chat history is updated
*/
  const responseAPI = `${process.env.REACT_APP_BACKEND_API_URL}/response`; // chatbot api url
  const getResponse = (message) => {
    console.log("arrived");
    setIsTyping(true);
    setTimeout(() => {
      // very small timeout so that user can see that the ai is typing
      axios
        .post(responseAPI, { message: message }, { withCredentials: true })
        .then((res) => {
          let oldHistory = chatHistory;
          let message = res.data.answer;
          let newHistory = oldHistory.concat([
            {
              type: "bot",
              message: message,
            },
          ]);
          setIsTyping(false);
          setChatHistory(newHistory);
        })
        .catch((err) => {
          //if not logged in tell user they should login
          let oldHistory = chatHistory;
          let newHistory = oldHistory.concat([
            {
              type: "bot",
              message: "You have to be logged in to use the Chatbot",
            },
          ]);
          setIsTyping(false);
          setChatHistory(newHistory);
          console.log(err);
        });
    }, 200);
  };

  return (
    <div className={cx(styles.chatbox, { [styles.hide_chat]: !chatBotActive })}>
      <ChatBoxHeader
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isTyping={isTyping}
      ></ChatBoxHeader>
      <ChatBoxChatHistory chatHistory={chatHistory}></ChatBoxChatHistory>
      <ChatBoxFooter
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
      ></ChatBoxFooter>
    </div>
  );
}
