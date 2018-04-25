import React, { Component } from 'react';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './App.css';
import routes from './routes';
// import Drinks from "./components/drinks/Drinks";
// import Savedrink from "./components/Savedrink/Savedrink";
// import Favdrink from "./components/Favdrinks/Favdrinks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="routes">{routes}</div>
      </div>
    );
  }
}

export default App;
