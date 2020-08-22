import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">LOGIN 🚀</Route>
          <Route path="/checkout">CHECKOUT 🚀</Route>
          <Route path="/">HOMEPAGE 🚀</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
