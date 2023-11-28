import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    //https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "f6baffbd4tea0o94df351e9ea09c0c43";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {

    setResults(response.data);
  }

   function handleKeywordChange(event) {
      setKeyword(event.target.value);
  }


  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <div className="form">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
