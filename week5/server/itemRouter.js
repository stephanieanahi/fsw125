const express = require('express');
const uuid = require("uuid")
const itemRouter = express.Router() //verify with the router video
var items = [ {
    id: uuid.v4(),
    material: "metal",
    amount: "50"
},
{
    id: uuid.v4(),
    material: "plastic",
    amount: "10"
},
{
    id: uuid.v4(),
    material: "rubber",
    amount: "30"
}

    

]
itemRouter.get('/', (req, res) => {
    res.send(items)
});

itemRouter.get('/:id', (req, res) => {

    const id = req.params.id
   const index = items.findIndex(item => item.id == id)
    res.send(items[index])
});

itemRouter.put('/:id', (req, res) => {

    const id = req.params.id
   const index = items.findIndex(item => item.id == id)
   Object.assign(items[index],req.body)
    res.send(items[index])
});

itemRouter.delete('/:id', (req, res) => {

    const id = req.params.id
   const index = items.findIndex(item => item.id == id)
  items.splice(index, 1)
    res.send(items)
});


    itemRouter.post('/', (req, res) => {
        const newitem = req.body
        newitem.id = uuid.v4()
        items.push(newitem)
        res.send(items[items.length -1])
    });
module.exports = itemRouter