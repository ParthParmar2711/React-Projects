// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import Player from "./Player"
import VideoItem from "./VideoItem"
import JSON from "./videodata.json"
const VideoContainer = () => {
  
  //! to display default video in player
  let [vid, setVid]=useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")  //? url of 1st video

  let [videoTitle, setVideoTitle] = useState("Big Buck Bunny")  //? title of 1st video


  //! storing JSON data under state variable(under component level)
  let [videoData, setVideodata]=useState(JSON);
  // console.log("json state", videoData);  //! array of object 
  
  return (
    <>
      <section id='videoContainer'>
        <aside className='leftAside'>
            <Player data={{vid, videoTitle}}/>
        </aside>
        <aside className='rightAside'>
            {videoData.map((val)=>{
                // console.log("map", val); //! object
                return <VideoItem key={val.id} data={val} updator={{setVid, setVideoTitle}}/>
            })}
        </aside>
      </section>
    </>
  )
}

export default VideoContainer