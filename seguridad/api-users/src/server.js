import express from 'express';
import cookieParser from 'cookie-parser';
import { initMySQLDB } from './config/db-connection.js';
import config from './config/index.js';
import { errorHandler } from './middlewares/error-handler.js';
import { userRouter } from './routes/user-router.js';

const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.use(errorHandler);

initMySQLDB()
  .then(() => {
    console.log('Database connection established successfully');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.listen(config.PORT, () => {
  console.log('API Users listening on port 8080');})