var express = require('express');
var router = express.Router();
var controllerAcademicTraining = require('..//Controller/AcademicTraining.js')
var controllerGeneralTraining = require('..//Controller/GeneralTraining.js')
var controllerEssayList = require('..//Controller/EssayList.js')
var controllerSpeaking = require('..//Controller/Speaking.js')
var controllerDeviceInfo = require('..//Controller/DeviceInfo.js')
var controllerDashboard = require('..//Controller/Dashboard.js')
var controllerEssayType = require('..//Controller/EssayType.js')
var controllerEssayQuestions = require('..//Controller/EssayQuestions.js')
var controllerWebsite = require('..//Controller/WebsiteController.js')


router.get('/welcome', function(req, res) { res.send('wel-come'); });

router.get('/writing/task_1/a_t', controllerAcademicTraining.getAll);
router.get('/writing/task_1/g_t', controllerGeneralTraining.getAll);
router.get('/writing/task_2/essay', controllerEssayList.getAll);
router.get('/speaking/speaking', controllerSpeaking.getAll);

router.get('/deviceInfo/get', controllerDeviceInfo.getAll);
router.post('/deviceInfo/set', controllerDeviceInfo.set);

router.post('/dashboard/dashboard1', controllerDashboard.dashboard1);

router.post('/essy_type/get', controllerEssayType.get);
router.post('/essy_questions/get', controllerEssayQuestions.get);
router.post('/essay_list/get', controllerEssayList.getAll);

router.post('/website/getAll', controllerWebsite.getAll);

module.exports = router;
