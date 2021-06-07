const express = require("express");
const dotenv = require('dotenv');
const colors = require("colors");
const morgan = require("morgan");
const { connectDB } = require("./config/db");

dotenv.config({ path: './config/config.env' }); // call the objects in config file process.env.VARIABLE_NAME

connectDB(); // promise not resolved?

const trans = require("./routes/transactions");

const app = express();

// req.body parser middleware
app.use(express.json());

// pivotal for API requests
app.use("/api/v1/transactions", trans);

const PORT =  process.env.PORT || 5000; // the port that the application will be running on

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));