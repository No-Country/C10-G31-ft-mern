/* The above code is creating a server and listening on port 3000. */
const express = require("express");
const cors = require("cors")
require("dotenv").config({ path: "./config/config.env" });
const connectDatabase = require("./config/database");
const routesProducts = require("./v1/routes/products")
const PORT = process.env.PORT
const app = express();


/* Importing the users router. */

app.use(cors())
/*const whiteList = [process.env.ORIGIN1]
app.use(cors({
  origin: function(origin, callback ){
    if(whiteList.includes(origin)){
      return callback(null, origin)
    }
    return callback(`Error de cors: ${origin}`)
  }
}))*/
app.use(express.json())
app.use("/api/v1/products", routesProducts);

/* Listening on port 3000. */
app.listen(PORT || 3000, async () => {
  try {
    connectDatabase();
  } catch (error) {
    console.log("error:", error);
  }
  console.log(`Server listening on ${PORT}`);
});