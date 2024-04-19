var EssayListModel = require('../Model/EssayListModel');
var EssayTypeModel = require('../Model/EssayTypeModel.js');
var BannerModel =  require('../Model/BannerModel.js');

exports.dashboard1 = [
    async (req, res) => {
      try {
        var data = await EssayListModel.find({}).limit(10);
        var types = await EssayTypeModel.find({}).sort({ type : 1});
        var banner = await BannerModel.find({});

        return res.json({
          status: true,
          message: "success.",
          data: {
            banner : banner,
            essay_type : types,
            essay_list : data
          },
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