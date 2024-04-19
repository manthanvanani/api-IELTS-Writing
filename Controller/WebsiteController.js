var WebsiteModel = require('..//Model/WebsiteModel.js');

exports.getAll = [
    async(req, res) => {
        try {
            var params = req.body ?? {};
            var data = await WebsiteModel.find(params)            
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