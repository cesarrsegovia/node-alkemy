import express from 'express';
import cookieParser from 'cookie-parser';
import { initMySQLDB } from './config/db-connection.js';
import config from './config/index.js';

const app = express();


app.use(cookieParser());
app.use(express.json());

initMySQLDB()
  .then(() => {
    console.log('Database connection established successfully');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.listen(config.PORT, () => {
  console.log('API Users listening on port 8080');})