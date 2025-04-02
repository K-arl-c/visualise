import { StrictMode, useState, ChangeEvent, ChangeEventHandler } from 'react'
import React from 'react';
import "./player.css"


export const Player = () =>{

const [audioSrc, setAudioSrc] = useState<string | null>(null);

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const file = event.target.files?.[0];
    if (file){
        const fileUrl = URL.createObjectURL(file);
        setAudioSrc(fileUrl);
    }


// const audioCtx = new AudioContext();
// const analyser = audioCtx.createAnalyser();

// const source = audioCtx.createMediaStreamSource(file)
// source.connect(analyser);
// analyser.connect(distortion);
// dist

}

    return(
        <div id='player-holder'>
            <input type="file" id='song' accept='.mp3'onChange={handleFileChange}/>
            <audio src={audioSrc ?? undefined} loop controls></audio>
            {/* <div id='progress-bar'></div> */}
            {/* <span id='song-title'>Song Title</span>
            <span id='artist-name'>Artist Name</span> */}
            {/* <img src="../src/assets/play-button.svg" alt="Pause Button" id='sound-button'/> */}
        </div>
    )
}