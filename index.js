const express = require('express');
const app = express();
const exercises = require('./routes/exercises')
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found')
const bodyParser = require('body-parser')


//middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());



//routes
app.use('/api/v1/exercises', exercises)
app.use(notFound)
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();