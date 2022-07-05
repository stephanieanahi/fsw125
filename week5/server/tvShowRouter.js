const express = require('express');
const uuid = require("uuid")
const tvShowRouter = express.Router() //verify with the router video
var tvShows = [ {
    id: uuid.v4(),
    title: "the giver",
    genre: "suspense"
}]
tvShowRouter.get('/', (req, res) => {
    res.send(tvShows)
});

tvShowRouter.get('/:id', (req, res) => {

    const id = req.params.id
   const index = tvShows.findIndex(tvShow => tvShow.id == id)
    res.send(tvShows[index])
});

tvShowRouter.put('/:id', (req, res) => {

    const id = req.params.id
   const index = tvShows.findIndex(tvShow => tvShow.id == id)
   Object.assign(tvShows[index],req.body)
    res.send(tvShows[index])
});

tvShowRouter.delete('/:id', (req, res) => {

    const id = req.params.id
   const index = tvShows.findIndex(tvShow => tvShow.id == id)
  tvShows.splice(index, 1)
    res.send(tvShows)
});


    tvShowRouter.post('/', (req, res) => {
        const newTvShow = req.body
        newTvShow.id = uuid.v4()
        tvShows.push(newTvShow)
        res.send(tvShows[tvShows.length -1])
    });
module.exports = tvShowRouter