import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Drinks from "./components/drinks/Drinks";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  };

  componentDidMount() {
    axios.get("/api/drinks")
    .then(response => {
      this.setState({ drinks: response.data.result })
      console.log(response.data.result);
    })
  }

  
  render() { console.log(this.state.drinks)
    //let mappedResults = this.state.drinks.map( (curr, i) => {
      //return <div key={i} > {curr.name} </div>  
    //});
 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> CREATE A COCKTAIL </h1>
        </header>
        <p className="App-intro">
        </p>
        <Drinks drinks={this.state.drinks} />
        
      </div>
    );
  };
}

export default App;
