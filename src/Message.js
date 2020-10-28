import { Avatar } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import "./Message.css";

function Message({ timestamp, user, message }) {
  const dummy = useRef();

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [message]);
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
      <div ref={dummy}></div>
    </div>
  );
}

export default Message;
