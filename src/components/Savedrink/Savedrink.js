import React, {Component} from 'react';
import axios from 'axios';
import './Savedrink.css';

class Savedrink extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.currentdrink, "HERE")
        return (
            <div>
    <button onClick={() => this.props.favDrink(this.props.currentdrink)}> Like </button>
            </div>
        )
    };
};

export default Savedrink;

