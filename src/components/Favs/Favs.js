import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Favdrink from './../Favdrinks/Favdrinks';

class Favs extends Component {
    constructor(props) {
        super(props);
    }


render() {
        return (
            <div> 
            <h1>Favorites</h1> 
                <Favdrink likedDrinks={this.props.favDrinks} />
            </div>

        )
 }

}

export default Favs;