const express = require('express')
const app = express()
const indexRouter = require('./routes/indexRouter');
const PORT = 3000;

app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT,() => {
    console.log(`El servidor arranca en puerto ${PORT}`);
})