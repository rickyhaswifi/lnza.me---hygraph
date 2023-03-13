import React from 'react'
import { VideoContainer } from '../styled-components/SC-iFrame';

 function VideoIframe(props) {
   const { videoID } = props
  return (
    <VideoContainer>
    <iframe src={`https://www.youtube.com/embed/${videoID}`}
    width="560" height="315"
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
    title="video"
    />
  </VideoContainer>
  )
}

export default VideoIframe