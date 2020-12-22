import "./Video.css";
import React, { useRef, useState } from "react";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";

// const Video = ({ url }) => {
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      {/* main video section */}
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        // src={"https://www.tiktok.com/@jkmusic16/video/6908399299051130114"}
        src={url}
        width="170"
        height="85"
        controls
      />
      {/* <VideoFooter
        channel="alihaider"
        description="this is my first ever mern project"
        song="love me like you do"
      /> */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* <VideoSidebar likes={111} shares={222} messages={333} /> */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
