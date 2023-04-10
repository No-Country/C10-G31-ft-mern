/* The above code is creating a server and listening on port 3000. */
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const connectDatabase = require("./config/database");

/* Importing the users router. */
const uploadsRouter = require('./v1/routes/uploads');
const productstRouter = require('./v1/routes/products');

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

//Fileupload middleware
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/',
  createParentPath : true
}));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK!",
    spotech: `localhost: ${process.env.PORT}/api/v1/spotech`
  });
});

app.use('/api/v1/products', productstRouter);
app.use('/api/v1/uploads', uploadsRouter);

/* Listening on port 3000. */
app.listen(PORT || 3000, async () => {
  try {
    connectDatabase();
  } catch (error) {
    console.log("error:", error);
  }
  console.log(`Server listening on ${PORT}`);
});