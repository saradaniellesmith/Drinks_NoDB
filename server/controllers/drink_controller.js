const axios = require("axios"); // all the functionality for your server lives in this file // can also make more controller files if needed
const { apiKey } = require('./../config.js');

let drinks = [];
id = 0;

const getDrinks = (req, res, next) => {
    axios.get("http://addb.absolutdrinks.com/drinks/?apiKey=aadb7d488b2e4309928d432dcfb3215a")
    .then(response => {
      drinks = response.data;
      res.json(drinks); 
      console.log(drinks, "laksdjfasjdf" , response.data); // give the front end a response of drinks 
    }) .catch(console.log);
}; 


module.exports = {
    getDrinks
};