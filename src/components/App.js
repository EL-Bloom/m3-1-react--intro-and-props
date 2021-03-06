import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";
import Avatar from "./Avatar";  



import "./App.css";

function App(props) {
  console.log(props);
  return (
    <div className="wrapper">
      <Header
        participants={props.conversation.participants}
        currentUser={props.currentUser} 
        
      />
      <ChatStream
        messages={props.conversation.messages}
        currentUser={props.currentUser}
      />
      <Footer />
    </div>
  );
}

export default App;
