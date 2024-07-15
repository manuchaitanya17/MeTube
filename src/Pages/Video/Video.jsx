import React, { useEffect } from "react";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import './Video.css'
import { useParams } from "react-router-dom";

const Video = () => {

  const {videoId,categoryId} = useParams();
  // useEffect(()=>{
  //   console.log(id);
  // },[])

  return (
      <div className="play-container">
        <PlayVideo videoId={videoId} />
        <Recommended categoryId={categoryId}/>
      </div>
  );
};

export default Video;
