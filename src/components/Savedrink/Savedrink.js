import React, {Component} from 'react';
import axios from 'axios';
import './Savedrink.css';

class Savedrink extends Component {
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(item) {
        axios.post("/api/saveDrink", {saved: this.props.currentdrink})
        console.log(item)
    }

    render() {
        console.log(this.props.currentdrink, "HERE")
        return (
            <div>
    <button onClick={() => this.handleClick(this.props.currentdrink)}> Like </button>
            </div>
        )
    };
};

export default Savedrink;