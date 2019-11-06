import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Contact from './Views/Contact';
import About from './Views/About';
import Home from './Views/Home/';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
  </Router>
    </div>
  );
}

export default App;
