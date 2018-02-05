import React, {Component} from 'react';


class Favdrinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDrinks: []
        }
    }


render() {
    let liked = this.props.likedDrinks.map((curr, i) => {
        return <div key={i} > <h1> {curr.name} </h1> 
        {curr.ingredients.map( (ingred, j) => {
            return  <h5 key={j}> {ingred.textPlain} </h5>
          })}
          <h4> {curr.descriptionPlain} </h4> 
        </div>
    })
    return(
        <div> {liked} </div>
    )
 }

}

export default Favdrinks;