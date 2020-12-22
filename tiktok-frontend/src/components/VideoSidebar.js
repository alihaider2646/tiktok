import "./VideoSidebar.css";
import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// const VideoSidebar = () => {
const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="larg" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="larg" onClick={(e) => setLiked(true)} />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="larg" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="larg" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
