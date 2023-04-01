/* The above code is creating a server and listening on port 3000. */
const express = require("express");
const cors = require("cors")
require("dotenv").config({ path: "./config/config.env" });
const connectDatabase = require("./config/database");
/* Importing the users router. */


const app = express();


app.use(cors())
const whiteList = [process.env.ORIGIN1]
app.use(cors({
  origin: function(origin, callback ){
    if(whiteList.includes(origin)){
      return callback(null, origin)
    }
    return callback(`Error de cors: ${origin}`)
  }
}))
app.use(express.json())

/* Listening on port 3000. */
app.listen(process.env.PORT || 3000, async () => {
  try {
    connectDatabase();
  } catch (error) {
    console.log("error:", error);
  }
  console.log(`Server listening on ${process.env.PORT}`);
});