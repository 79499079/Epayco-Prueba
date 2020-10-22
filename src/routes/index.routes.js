const express = require("express");
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/confirmacion', (req, res) =>{
    res.render('epayco/confirmacion')
})

router.get('/error', (req, res) =>{
    res.render('epayco/error')
})

module.exports = router;
