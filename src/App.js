import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/login"></Route>
          <Route path="/checkout"></Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
