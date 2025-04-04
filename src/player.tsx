// Player.tsx
import { useEffect, useRef, useState } from "react";
import React from "react";
import p5 from "p5";
import "./player.css";

export const Player = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      p.setup = () => {
        setAudioSrc("/assets/test-audio.mp3");
        const canvas = p.createCanvas(700, 700);
        canvas.parent(canvasRef.current!);
        p.background("white");
        p.fill(0, 0, 255);
        p.circle(p.width / 2, p.height / 2, 250);
      };

      p.draw = () => {
        p.background("white");
        p.fill(0, 0, 255);
        p.circle(p.width / 2, p.height / 2, 250);
      };

      p.mousePressed = () => {
        if (audioRef.current) {
          if (audioRef.current.paused) {
            audioRef.current.play()
              .then(() => console.log("Song started playing"))
              .catch((err) => console.error("Error playing song:", err));
          } else {
            audioRef.current.pause();
            console.log("Song paused");
          }
        }
      };
    };

    p5InstanceRef.current = new p5(sketch);

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        console.log("p5 instance cleaned up");
      }
    };
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const file = event.target.files?.[0];
    if (file){
        const fileUrl = URL.createObjectURL(file);
        setAudioSrc(fileUrl);
    }
  }

  return (
    <div id="player-holder">
      <input type="file" id='song' accept='.mp3'onChange={handleFileChange}/>
      <div id="canvas-container" ref={canvasRef}></div>
      <audio ref={audioRef} src={audioSrc ?? undefined} preload="auto" />
    </div>
  );
};