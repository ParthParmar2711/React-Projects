//todo RIGHT PART
// eslint-disable-next-line no-unused-vars
import React from 'react'

const VideoItem = (props) => {

  console.log("videoitem", props);
  
  let {thumbnailUrl, title, videoUrl, views}=props.data;
  
  let [setVid, setVideoTitle]=props.updator;

  let changeUrlandTitleinPlayer=()=>{
    setVid(videoUrl);
    setVideoTitle(title)
  }

  return (
    <>
     <div className="imgContainer">
        <img src={thumbnailUrl} alt={title} height="150px" width="300px" onClick={changeUrlandTitleinPlayer}/>
     </div>
     <h5>{views}</h5>
    </>
  )
}

export default VideoItem

//! thumbnailUrl --> images