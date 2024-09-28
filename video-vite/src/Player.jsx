// eslint-disable-next-line no-unused-vars
import React, {useRef, useState} from 'react'
import { FaVolumeMute } from "react-icons/fa";
import { VscUnmute } from "react-icons/vsc";
const Player = (props) => {
  
  console.log("Player props", props);

  let {vid, videoTitle}=props.data;
  
  //! reference variable
  let videoRef=useRef()
  console.log("reference varaible", videoRef);
  
  let [play, setPlay]= useState(true); //! to play the video
  let [muteVideo, setMuteVideo]=useState(true); //! to mute the audio

  let playOrPause=()=>{
    videoRef.current.autoplay=true;
    if(play===true){
      videoRef.current.play();
    }else{
      videoRef.current.pause();
    }
    setPlay(!play); //*play---> true
    //* 1st click------> !true ---> false
    //? 2nd click------> !false ---> true
  };

  let muteUmute=()=>{
    videoRef.current.muted=muteVideo
    setMuteVideo(!muteVideo)
  }


  return (
    <>
      <h1>Video Player</h1>
      <div className="player">
        <video src={vid} height="500px" width="1000px" ref={videoRef} onClick={playOrPause}></video>
      </div>
      <h1 className="vidTitle">{videoTitle}</h1>
      <span onClick={muteUmute}>{muteVideo===true? <FaVolumeMute /> : <VscUnmute />}</span>
    </>
  )
}

export default Player

//!  Video TAG ---> 1) play()    2) pause()

//* videoRef----> current---> all the property and methods of videotag.