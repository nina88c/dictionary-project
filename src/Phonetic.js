/*
SHECODES API DOESNT HAVE A PHONTEICS 

import React from "react";
import "./Phonetic.css";

// Documentation: https://dictionaryapi.dev/

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <div className="phoneticText">{props.phonetic.text}</div>
        <audio
          autoPlay={false}
          className="react-audio-player"
          controls
          id="audio"
          preload="metadata"
          src={props.phonetic.audio}
          title="Pronunciation"
        ></audio>
      </div>
    );
  } else {
    return null;
  }
}*/
