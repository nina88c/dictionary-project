import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {

    setResults(response.data);
  }

  function search() {

    //https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "f6baffbd4tea0o94df351e9ea09c0c43";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
     function load() {
       setLoaded(true);
       search();
     }
     if (loaded) {
       return (
         <div className="Dictionary">
           <h1>Dictionary</h1>
           <h4>what word do you want to look up?</h4>
           <div className="form">
             <form onSubmit={handleSubmit}>
               <input type="search" onChange={handleKeywordChange}
               defaultValue={props.defaultKeyword}/>
             </form>
           </div>

           <div className="hint">
             suggested words: sunset, coding, yoga, plants...
           </div>

           <Results results={results} />
         </div>
       );
     } else {
       load();
       return "loading";
     }
   }


