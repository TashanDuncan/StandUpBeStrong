const express = require('express');
const app = express();
const exercises = require('./routes/exercises')
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.static('./public'))
app.use(express.json())


//routes
app.use('/api/v1/exercises', exercises)

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