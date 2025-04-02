import { StrictMode } from 'react'
import "./player.css"

export const Player = () =>{
    return(
        <div id='player-holder'>
            <input type="file" id='song' accept='.mp3'/>
            <div id='progress-bar'></div>
            <span id='song-title'>Song Title</span>
            <span id='artist-name'>Artist Name</span>
            <img src="../src/assets/play-button.svg" alt="Pause Button" id='sound-button'/>
        </div>
    )
}