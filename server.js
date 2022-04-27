// imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
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
const { handleAllErrors } = require('./middleware/errorHandler');

app.use('/user', userRouter);
app.use('/translate', translateRouter);
app.use('/quiz', quizRouter);

app.use(handleAllErrors);

if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

///////////////////////
app.listen(process.env.PORT || port, () => {
  console.log(`connected to ${port}`);
});
