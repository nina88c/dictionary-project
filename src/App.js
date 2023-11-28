import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="tab-bar d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-file"></i>
          <p className="mt-3">
            Coded by{" "}
            <a href="https://github.com/nina88c/dictionary-project" className="delina-link">
              Delina Carnaffin
            </a>
          </p>
        </div>
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-window-minimize"></i>
          <i className="fa-regular fa-window-restore"></i>
          <i className="fa-regular fa-rectangle-xmark"></i>
        </div>
      </div>
      <div className="container">
        <header className="App-header">

        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
      </div>
    </div>
  );
}
