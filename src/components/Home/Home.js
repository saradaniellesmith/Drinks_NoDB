import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';
import Drinks from "./../drinks/Drinks";
import Savedrink from "./../Savedrink/Savedrink";
import Favdrink from './../Favdrinks/Favdrinks';


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        drinks: [],
        favDrinks: []
      };
      this.handleClick=this.handleClick.bind(this);
    };
  
    componentDidMount() {
      axios.get("/api/drinks")
      .then(response => {
        this.setState({ drinks: response.data.result })
        // console.log(response.data.result);
      })
    }
    
    handleClick(item) {
      axios.post("/api/saveDrink", {saved: item})
      .then(response => {
        this.setState({ favDrinks: response.data })
        console.log(response.data);
      })
      console.log(item)
  }
    
    render() { console.log(this.state.drinks)
  
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"> CREATE A COCKTAIL </h1>
            <Link to="/favs"> FAVS </Link> 
          </header>
          <p className="App-intro"> </p>
          <Drinks addDrink={this.handleClick} drinks={this.state.drinks} />
  
  <h1>Favorites</h1> 
       <Favdrink likedDrinks={this.state.favDrinks} />
        </div>
      );
    };
  }
  
  export default Home;
  