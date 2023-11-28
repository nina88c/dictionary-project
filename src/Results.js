import React from "react";
import Meaning from "./Meaning";


export default function Results(props) {
  if (props.results) {
    return (
      <div className="Definitions">
        <h2>{props.results.word}</h2>

        {/* <h4>
    <Phonetic phonetic={props.results.phonetic} />
  </h4> */}

        <ul>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <li key={index}>
                <Meaning meaning={meaning} />
                {meaning.definition}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (null);
  }
}
