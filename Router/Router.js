var express = require('express');
var router = express.Router();
var controllerAcademicTraining = require('..//Controller/AcademicTraining.js')
var controllerGeneralTraining = require('..//Controller/GeneralTraining.js')
var controllerEssayList = require('..//Controller/EssayList.js')
var controllerSpeaking = require('..//Controller/Speaking.js')
var controllerDeviceInfo = require('..//Controller/DeviceInfo.js')



router.get('/welcome', function(req, res) { res.send('wel-come'); });

router.get('/writing/task_1/a_t', controllerAcademicTraining.getAll);
router.get('/writing/task_1/g_t', controllerGeneralTraining.getAll);
router.get('/writing/task_2/essay', controllerEssayList.getAll);
router.get('/speaking/speaking', controllerSpeaking.getAll);

router.get('/deviceInfo/get', controllerDeviceInfo.getAll);
router.post('/deviceInfo/set', controllerDeviceInfo.set);

module.exports = router;
