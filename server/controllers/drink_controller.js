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
    res.json(favDrinks)
   console.log(favDrinks);
};

const deleteFav = (req, res, next) => {
    favDrinks.splice(parseInt(req.params.index), 1)
    res.status(200).json(favDrinks);
};


module.exports = {
    getDrinks,
    likeDrinks,
    deleteFav
};

