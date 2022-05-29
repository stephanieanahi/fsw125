const express = require('express');
const app = express();

const PORT = 3000;

let actors = [
    {name:'stephanie', location:'donna'},
    {name:'abdiel', location:'alamo'},
    {name:'athan', location:'pharr'},
    {name:'jacob', location:'weslaco'},
];


app.get('/actors', (req, res) => {
    res.send(actors)
});


let movies = [
    {name:'sonic 1'},
    {name:'sonic 2'},
    {name:'fast and the furious'},
    {name:'twilight'},
];


app.get('/movies', (req, res) => {
    res.send(movies)
});


let cars = [
    {model:'Mustang'},
    {model:'Camero'},
    {model:'Camry'},
    {model:'Mache'},
];

app.get('/cars', (req, res) => {
    res.send(cars)
});




app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});

