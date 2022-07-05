const express = require('express');
const uuid = require("uuid")
const itemRouter = express.Router() //verify with the router video
var items = [ {
    id: uuid.v4(),
    material: "metal", 
    status: "new",
    inStock: true,
    amount: 5,
    sellAs: ["individual", "pairs"]
},
{
    id: uuid.v4(),
    material: "plastic",
    status: "used",
    inStock: false,
    amount: 10,
    sellAs: ["individual", "pairs"]
},
{
    id: uuid.v4(),
    material: "rubber",
    status: "new",
    inStock: false,
    amount: 30,
    sellAs: ["individual", "pairs"]
}

    

]
itemRouter.get('/', (req, res) => {
    res.status(200).send(items)

    
});

itemRouter.get('/:id', (req, res, next) => {

    const id = req.params.id
   const index = items.findIndex(item => item.id == id)
   if(index<0){
    const error = new Error ("The item was not found");
    next (error);
   }
    res.send(items[index])
});

itemRouter.get('/search/material', (req, res)=> {
    const itemMaterial = req.query.material;
    const filteredItems = items.filter(item => item.material === itemMaterial);
    res.send(filteredItems)
})

itemRouter.put('/:id', (req, res, next) => {

    const id = req.params.id
   const index = items.findIndex(item => item.id == id)
   if(index<0){
    const error = new Error ("The item was not found");
    next (error);
   }
   Object.assign(items[index],req.body)
    res.send(items[index])
});

itemRouter.delete('/:id', (req, res, next) => {

    const id = req.params.id
    console.log(id)
   const index = items.findIndex(item => item.id == id)
   if(index<0){
    const error = new Error ("The item was not found");
    next (error);
   }
   console.log(index)
  items.splice(index, 1)
  console.log(items)
    res.send(items)
});


    itemRouter.post('/', (req, res) => {
        const newitem = req.body
        newitem.id = uuid.v4()
        items.push(newitem)
        res.status(201).send(items[items.length -1])
    });
module.exports = itemRouter