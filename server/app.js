/* The above code is creating a server and listening on port 3000. */
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/config.env" });
const fileUpload = require("express-fileupload");

const connectDatabase = require("./config/database");


/* Importing the users router. */
const productstRouter = require('./v1/routes/products');
const userRouter = require('./v1/routes/user');
const categoryRouter = require('./v1/routes/category');
const subcategoryRouter = require('./v1/routes/subcategory');
const orderRouter = require('./v1/routes/order')


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




//Fileupload middleware
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './assets/tmp/'
}));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK!",
    spotech: `localhost: ${process.env.PORT}/api/v1/spotech`
  });
});


app.use('/api/v1/product', productstRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/subcategory', subcategoryRouter);






/* Listening on port 3000. */
const PORT = process.env.PORT
app.listen(PORT || 4000, async () => {
  try {
    connectDatabase();
  } catch (error) {
    console.log("error:", error);
  }
  console.log(`Server listening on ${PORT}`);
});