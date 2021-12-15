import React from "react";
import ReactPlayer from "react-player";
import { Heading } from "../InfoSection/InfoElements";
import { VideoContainer, VideoWrapper } from "./VideoElements";

const Video = () => {
  return (
    <>
      <VideoContainer>
        <VideoWrapper>
          <Heading>Veja-nos em ação</Heading>
          <ReactPlayer
            url="videos/upload.mp4"
            controls={true}
            pip
            volume={0.3}
          />
        </VideoWrapper>
      </VideoContainer>
    </>
  );
};

export default Video;
