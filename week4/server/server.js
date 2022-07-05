const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(morgan("combined"))

const PORT = 9000;

var cars = []

app.get('/cars', (req, res) => {
    res.send("Not working?!")
});

const testRouter = require("./testRouter")
app.use("/test", testRouter)

app.listen(PORT, () => {
    console.log(`App started on port!: ${PORT}`)
});

