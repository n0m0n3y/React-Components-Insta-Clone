import React from 'react';
import './Comment.css';

const Comments = props => {
  // const Comments [Comments, setComments] = useState(props.post.comments) 
  return (
    <div className="comment-text">
      <span className="user">{props.comments.username}</span>
      {' '}
      <span className="comment">{props.comments.text}</span>
    </div>
  );
};


export default Comments;
