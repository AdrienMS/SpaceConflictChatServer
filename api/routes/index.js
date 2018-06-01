
/*
Importing library
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send({'return': 'hello world'})
});

module.exports = router;