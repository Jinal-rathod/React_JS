import React from "react";
import { useRef, useState } from "react";
import audio from "../assets/audio.mp3";

const AudioRef = () => {
  const ref = useRef(null);
  const [setPlaying, setOfPlaying] = useState(false);

  // function audioPlay(){
  //     ref.current.play();
  // }

  // function audioPause(){
  //     ref.current.pause();
  // }

  function audioToggle() {
    if (setPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    setOfPlaying(!setPlaying);
  }

  return (
    <>
      <audio controls src={audio} ref={ref}></audio>
      {/* <button onClick={audioPlay}>Play</button>
    <button onClick={audioPause}>Pause</button> */}

      <button onClick={audioToggle}>{setPlaying ? "pause" : "Play"}</button>
    </>
  );
};

export default AudioRef;
