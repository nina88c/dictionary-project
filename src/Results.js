import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Definitions">
        <h2>{props.results.word}</h2>
        <ul>
          {props.results.meanings.map(function (meaning, index) {
            return <li key={index}>{meaning.definition}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return "Loading...";
  }
}
