import React, { useState } from "react";
import styles from "./chatbox-footer-styles.module.scss";

export default function ChatBoxFooter(props) {
  const [newMessage, setNewMessage] = useState("");
  function handleChange(event) {
    setNewMessage(event.target.value);
  }
  function addToChatHistory() {
    /* 
      add new message to chat history by concating it to current message history
      then setting new chat History state
    */
    let oldHistory = props.chatHistory;
    console.log(oldHistory);
    let newHistory = oldHistory.concat([
      {
        type: "user",
        message: newMessage,
      },
    ]);
    props.setChatHistory(newHistory);
    setNewMessage("");
  }

  function submit() {
    // function that runs through all processes after a message is send into the chat
    addToChatHistory();
  }

  function submitOnEnterKey(event) {
    if (event.keyCode === 13) {
      // keycode of enter button and if key is pressed it should submit
      submit();
    }
  }

  return (
    <div className={styles.chatbox_footer}>
      <input
        type="text"
        onChange={handleChange}
        value={newMessage}
        onKeyUp={submitOnEnterKey}
      />
      <img
        src="images/send.svg"
        alt=""
        placeholder="Enter your message"
        onClick={submit}
      />
    </div>
  );
}
