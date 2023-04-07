/* Connecting to the database. */
// Import the Mongoose library
const mongoose = require("mongoose");
// Disable strictQuery mode
mongoose.set("strictQuery", false);
require("dotenv").config();

/**
 * Asynchronous function that connects to a MongoDB database using the provided URI.
 */
const connectDatabase = async () => {
  try {
    const con = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Base de datos mongo conectada con la base de datos llamada: ${con.connection.name}`
    );
  } catch (error) {
    console.log(`error:${error}`);
  }
};


// Export the connectDatabase function
module.exports = connectDatabase;