var express = require('express');
var router = express.Router();
var controller = require('..//Controller/AcademicTraining.js')

router.get('/welcome', function(req, res) {
    res.send('vv')
  });

router.get('/a', controller.getAll);

module.exports = router;
