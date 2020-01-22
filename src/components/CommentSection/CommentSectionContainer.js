// You will add code to this file
import React, { useState } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput"
import "./Comment.css";


const CommentSection = props => {
  console.log(props)
// const [userPosts]= useState(props.comments);
  return (
    <div>
    {props.comments.map(p =>(
      <Comment comment = {p}/>
    ))}
       
      <CommentInput 
      Classname ='box'/>
      
    </div>
  );
};

export default CommentSection;
