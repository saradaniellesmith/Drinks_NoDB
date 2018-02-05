import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Drinks from "./components/drinks/Drinks";
import Savedrink from "./components/Savedrink/Savedrink";


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

      // let mappedResults = props.drinks.map( (curr, i) => {
      //     return <div key={i} > 
      //  <div className="body">
      //   <h3>  {curr.name} </h3>
      //   <h4> {curr.descriptionPlain} </h4> 
      //   < Savedrink currentdrink={curr}/>
      //   </div>
      //     </div>  
      //   });

 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> CREATE A COCKTAIL </h1>
          {/* <h2 className="Likes-title"> LIKES </h2> */}
        </header>
        <p className="App-intro">
        </p>
        <Drinks drinks={this.state.drinks} />
<h1>Favorites</h1> 
     {/* {mappedResults} */}
      </div>
    );
  };
}

export default App;
