const express = require('express');
const router = express.Router();

//GET
router.get('/', (req,res) => {
    res.send("GET - home page de nuestra API");
})

//POST
router.post('/', (req,res) => {
    res.send("POST - home page de nuestra API");
})

//PUT
router.put('/', (req,res) => {
    res.send("PUT - home page de nuestra API");
})

//DELETE
router.delete('/', (req,res) => {
    res.send("DELETE - home page de nuestra API");
})

module.exports = router;