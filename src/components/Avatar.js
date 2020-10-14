import React from "react"; 
import "./Avatar.css"  

const Avatar = (props) => { 
    return <img className= "avatarOnline" 
            src={props.users.avatar}
            alt={props.users.username}
    />

       } 
        
export default Avatar;
