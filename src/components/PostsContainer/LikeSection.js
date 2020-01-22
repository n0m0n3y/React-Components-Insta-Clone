import React from 'react';

const LikeSection = props => {
  
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
      onClick ={props.incrementLike}
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick ={props.incrementLikes}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">{props.likes} Likes</p>
</div>
  )
};

export default LikeSection;
