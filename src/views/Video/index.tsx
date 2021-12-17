import React from "react";
import { Heading } from "../InfoSection/InfoElements";
import { VideoContainer, VideoWrapper, Player } from "./VideoElements";

const Video = () => {
  return (
    <>
      <VideoContainer>
        <VideoWrapper>
          <Heading>Veja-nos em ação</Heading>
          <Player
            url="videos/upload.mp4"
            controls={true}
            pip
            volume={0.3}
            width={"70vw"}
            height={"50vh"}
          />
        </VideoWrapper>
      </VideoContainer>
    </>
  );
};

export default Video;
