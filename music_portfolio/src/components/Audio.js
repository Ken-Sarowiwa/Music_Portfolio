import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Audio() {
  return (
    <div className='container'>
        <hr></hr>
        <strong><p>Take a moment and listen to some of Kenafricas Hottest freestyles,exhileting and seductive for the ladies </p></strong>
         <AudioPlayer
            autoPlay
            src="https://drive.google.com/file/d/1W708282JLfV6AOHARokisqgwClLRAXfg/view"
            onPlay={e => console.log("onPlay")}
  />
    </div>
  )
}
