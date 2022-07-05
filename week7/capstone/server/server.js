const express = require('express');
const morgan = require('morgan')

const itemRouter = require('./itemRouter');


const app = express();
app.use(express.json())
const PORT =9000;

app.use('/items', itemRouter)


app.listen(PORT, ()=> {
    console.log(`App started on port: ${PORT}`)
});