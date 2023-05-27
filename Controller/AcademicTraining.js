var AcademicTrainingModel = require('..//Model/AcademicTraining.js');

exports.getAll = [
    async(req, res) => {
        try {
            console.log('a')
            var data = await AcademicTrainingModel.find()
            console.log('AcademicTrainingModel', data.length);
            return res.json({
                status: true,
                message: "success.",
                data: data,
                error: null
            });
        } catch (error) {
            console.log('ERROR-----', error.message);
            return res.json({
                status: false,
                message: error.message,
                data: null,
                error: error
            });
        }
    }
]