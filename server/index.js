const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const drink_controller = require("./controllers/drink_controller");


const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get("/api/drinks", drink_controller.getDrinks); // invoking getCharacters- your own API 

app.listen(port, () => {
 console.log(`Listening on port: ${port}`);
});
