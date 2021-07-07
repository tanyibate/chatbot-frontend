import React, { useState } from "react";
import styles from "./chatbox-footer-styles.module.scss";

export default function ChatBoxFooter(props) {
  const [newMessage, setNewMessage] = useState("");
  function handleChange(event) {
    setNewMessage(event.target.value);
  }

  return (
    <div className={styles.chatbox_footer}>
      <input type="text" onChange={handleChange} />
      <img
        src="images/send.svg"
        alt=""
        placeholder="Enter your message"
        onClick={() => {
          let oldHistory = props.chatHistory;
          console.log(oldHistory);
          let newHistory = oldHistory.concat([
            {
              type: "user",
              message: newMessage,
            },
          ]);
          console.log(newHistory);
          props.setChatHistory(newHistory);
        }}
      />
    </div>
  );
}
