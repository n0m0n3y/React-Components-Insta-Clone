import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comments}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;
