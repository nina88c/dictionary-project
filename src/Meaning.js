import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
  console.log(props.meaning.example);
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>

      <div className="definition">{props.meaning.definition}</div>
      
      <div className="example">{props.meaning.example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
