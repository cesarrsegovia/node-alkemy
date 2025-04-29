const express = require('express');
const unifyMessagesMiddleware = require('./middlewares/unifyMessagesMiddlewares');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(unifyMessagesMiddleware);

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

module.exports = app;