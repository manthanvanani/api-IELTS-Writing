var EssayTypeModel = require('../Model/EssayTypeModel.js');

exports.get = [
    async (req, res) => {
      try {
        var data = await EssayTypeModel.find({}).limit(10);
        return res.json({
          status: true,
          message: "success.",
          data: data,
          error: null,
        });

      } catch (error) {
        
        return res.json({
          status: false,
          message: error.message,
          data: null,
          error: error,
        });
      }
    },
  ];