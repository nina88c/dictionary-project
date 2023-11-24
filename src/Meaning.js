import React from "react";

export default function Meaning(props) {
   console.log(props.meaning);
   return (
     <div className="Meaning">
       <h3> {props.meaning.partOfSpeech}</h3>
       <p>{props.meaning.defintion}</p>
       <p>{props.meaning.example}</p>
     </div>
   );

}