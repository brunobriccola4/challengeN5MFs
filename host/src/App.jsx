import React from "react";
import ReactDOM from "react-dom";

import Characters from "../../remote/src/Characters";

import "./index.css";

const App = () => (
  <div className="container">
    <h1> Lista de Personajes</h1>
    <Characters />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
