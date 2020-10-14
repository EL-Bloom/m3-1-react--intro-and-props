import React from "react";
// import participants from './Participants';
import Avatar from "./Avatar";
import "./Header.css";

const Header = (props) => {
  console.log(props);
  let filteredParticipants = props.participants.filter((participant) => {
    return participant !== props.currentUser;
  });
  console.log(filteredParticipants);

  return (
    <header>
      {filteredParticipants.map((personOnline) => {
       return <> 
       <img src={personOnline.avatar} /> 
       <p>{personOnline.username}</p>
       </>
      })}
    </header>
  );
  //  const filteredParticipants;
  //     {props.participants.filter((participant) =>
  //     participant !== props.currentUser
  //     )}
  //       return <header>
  //       map((participant)) => {
  //         return <Participants {participants} />
};

export default Header;
