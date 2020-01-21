// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const [comments, setComments]= useState(comments);
  return (
    <div>
      {props.comments.map}
      <CommentInput 
      Classname ='box'
      key={props.comments}
      post={props}/>
    </div>
  );
};

export default CommentSection;
