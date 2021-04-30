import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar'
import Home from './container/Home'
import reportWebVitals from './reportWebVitals';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Navbar />
    <Switch>
        <Route path="/pricing">
            <Home />
        </Route>
        <Route path="/features">
            <Home />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
