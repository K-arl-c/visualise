import p5 from 'p5';
import { StrictMode, useState, ChangeEvent, ChangeEventHandler, useEffect, useRef} from 'react'
import React from 'react';
import "./player.css"


export const Player = () =>{

const [audioSrc, setAudioSrc] = useState<string | null>(null);
const canvasRef = useRef(null);

useEffect(() =>{
    const sketch = (p5) =>{

        p5.setup = () =>{
            p5.createCanvas(500,500).parent(canvasRef.current)
        };

        p5.draw = () =>{
            p5.background(200);
            p5.fill(0,0,255);
            p5.ellipse(50,50,80);
        };
    };
        new p5(sketch);

        return () => {}
}, []);

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const file = event.target.files?.[0];
    if (file){
        const fileUrl = URL.createObjectURL(file);
        setAudioSrc(fileUrl);
    }

}

    return(
        <div id='player-holder'>
            <input type="file" id='song' accept='.mp3'onChange={handleFileChange}/>
            <audio src={audioSrc ?? undefined} loop controls></audio>
            <div id='canvas-container' ref={canvasRef}></div>
            {/* <div id='progress-bar'></div> */}
            {/* <span id='song-title'>Song Title</span>
            <span id='artist-name'>Artist Name</span> */}
            {/* <img src="../src/assets/play-button.svg" alt="Pause Button" id='sound-button'/> */}
        </div>
    )
}