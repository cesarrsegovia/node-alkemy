import express from 'express'
import cookieParser from 'cookie-parser'
import { initMySQLDB } from './config/db-connection.js';
import config from './config/index.js';

const app = express()

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

initMySQLDB()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Database error.", error))

app.listen(config.PORT, () => console.log("server running 8080")
)