import React, {Component} from 'react';
import './Drinks.css';


     const Drinks = (props) => {
        let mappedResults = props.drinks.map( (curr, i) => {
            return <div key={i} > 
         <div className="body">
          <h3>  {curr.name} </h3>
          <h4> {curr.descriptionPlain} </h4> 
          </div>
            </div>  
          });

        return(
            <div>
                {mappedResults}
            </div>
        )
    };

export default Drinks;