// imports
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 4001;

// Global middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('we are connected to the database.');
  })
  .catch((error) => {
    console.log('an error occurred while connecting ot the db', error.message);
  });

// Routes
const userRouter = require('./routes/userRoutes');
const translateRouter = require('./routes/translateRoutes');
const quizRouter = require('./routes/quizRoutes');


app.use('/user', userRouter);
app.use('/translate', translateRouter);
app.use("/quiz", quizRouter)

///////////////////////
app.listen(process.env.PORT || port, () => {
  console.log(`connected to ${port}`);
});
