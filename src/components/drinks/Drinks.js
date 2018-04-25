import React, {Component} from 'react';
import './Drinks.css';
import Savedrink from "./../Savedrink/Savedrink";

     const Drinks = (props) => {
        let mappedResults = props.drinks.map( (curr, i) => {
            return <div key={i} >
          <div className="body">
          <h3>  {curr.name} </h3>
          {curr.ingredients.map( (ingred, j) => {
            return  <h5 key={j}> {ingred.textPlain} </h5>
          })}
          <h4> {curr.descriptionPlain} </h4> 
        
          < Savedrink favDrink={props.addDrink} currentdrink={curr}/>
          </div>
         </div>  
          });

        return(
            <div className="drinks-container">
                {mappedResults}
            </div>
        )
    };

export default Drinks;