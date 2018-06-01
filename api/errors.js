var express = require('express');
var router = express.Router();

//-------------------------------------catch error 404 and forward it to error handler----------------------------------

router.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

router.use(function(err, req, res, next) {
    var message = JSON.parse('{"message": "' + err + '"}');
    console.log(message);
    res.status(err.status || 500);
    res.send(message);
});

module.exports = router;