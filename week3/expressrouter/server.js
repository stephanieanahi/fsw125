const express = require('express');
const app = express();
const {v4: uuidv4 } = require('uuid');

const port= 3000;

app.use(express.json())

let recycledItems = [
    {name: },
    {description:},
    {recyclable:},
    
]