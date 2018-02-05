const axios = require("axios"); // all the functionality for your server lives in this file 
const { apiKey } = require('./../config.js');

let drinks = [];
let favDrinks = [];
id = 0;

const getDrinks = (req, res, next) => {
    axios.get("http://addb.absolutdrinks.com/drinks/?apiKey=aadb7d488b2e4309928d432dcfb3215a")
    .then(response => {
      drinks = response.data;
      res.json(drinks); 
    }) .catch(console.log);
}; 

const likeDrinks = (req, res, next) => {
   favDrinks.push(req.body.saved)
}

module.exports = {
    getDrinks,
    likeDrinks
};

