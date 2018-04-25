import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Favdrinks.css';
import axios from 'axios';

class Favdrinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDrinks: []
        }
    }

deleteFav(i) {
    axios.delete("/api/deletefav/${i}")
}


render() {
    let liked = this.props.likedDrinks.map((curr, i) => {
        return <div className="liked" key={i} > <h1> {curr.name} </h1> 
        {curr.ingredients.map( (ingred, j) => {
            return  <h5 key={j}> {ingred.textPlain} </h5>
          })}
          <div> {curr.descriptionPlain}</div> 
          <button className="delete-btn" onClick={() => this.deleteFav(i)}> delete </button>
        </div>
    })
    return(
        <div> {liked} </div>
    )
 }

}

export default Favdrinks;