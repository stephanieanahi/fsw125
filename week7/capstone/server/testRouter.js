const express = require('express');
const testRouter = express.Router() //verify with the router video

testRouter.get('/', (req, res) => {
    res.send("The test worked")
});

testRouter.get(':/idComesThroughHere', (req, res) => {

    const id = req.params.idComesThroughHere
    console.log(id)
    res.send("The test worked"+id)
});

module.exports = testRouter


// http://localhost:6000/test/identifier