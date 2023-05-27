var AcademicTrainingModel = require('..//Model/AcademicTraining.js');

exports.getAll = [ async (req, res) => {
    console.log('AcademicTrainingModel')
    return    res.send('a')
    try {
        console.log('A')
        res.send('a')
    } catch (error) {
        res.send(error.message)
        console.log(error.message);
    }
}]