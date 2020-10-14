import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log(props);
  if (props.messageType === "sent") {
    return <div className= 'chatMessage'>
  
         <div>
        <img className="avatar" src={props.message.user.avatar} />
      </div>
      <div className="messageSent">
        <div className='chatContent'>
        <p className="userName">{props.message.user.username}</p>
        <p className='textMessageReceived'>{props.message.body}</p> 
        </div> 
        </div>
    </div>;
  }
  else {
  return (
    <div className="chatMessage">
      <div>
        <img className="avatar" src={props.message.user.avatar} />
      </div>
      <div className="chatContent">
        <p className="userName">{props.message.user.username}</p>
        <p className="textMessage">{props.message.body}</p>
      </div>
    </div>
  );
}};
export default ChatMessage;
