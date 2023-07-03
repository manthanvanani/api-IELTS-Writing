var DeviceInfoModel = require("../Model/DeviceInfoModel");

exports.getAll = [
  async (req, res) => {
    try {
      console.log("a");
      var data = await DeviceInfoModel.find();
      return res.json({
        status: true,
        message: "success.",
        data: data,
        error: null,
      });
    } catch (error) {
      console.log("ERROR-----", error.message);
      return res.json({
        status: false,
        message: error.message,
        data: null,
        error: error,
      });
    }
  },
];

exports.set = [
  async (req, res) => {
    try {
      var fcm_token = req.body.fcm_token ?? "";
      var identifierForVendor = req.body.identifierForVendor ?? "";
      var systemVersion = req.body.systemVersion ?? "";
      var bundleIdentifier = req.body.bundleIdentifier ?? "";
      var regionCode = req.body.regionCode ?? "";

      var data = {
        'fcm_token': fcm_token,
        'identifierForVendor': identifierForVendor,
        'systemVersion': systemVersion,
        'bundleIdentifier': bundleIdentifier,
        'regionCode': regionCode,
      }
      console.log(data);
    var query = { 'identifierForVendor' : identifierForVendor },
    update = data,
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

    var result = await DeviceInfoModel.findOne(query)
    
    if(result){
        var _update = await DeviceInfoModel.updateOne(query, data, { upsert: true, new: true, setDefaultsOnInsert: true})        
        return res.json({
            status: _update.acknowledged,
            message: 'Update',
            data: null,
            error: null,
          });
    }else{
        var _result = await DeviceInfoModel(data).save()
        console.log(_result)
    }
    } catch (error) {
      console.log("ERROR-----", error.message);
      return res.json({
        status: false,
        message: error.message,
        data: null,
        error: error,
      });
    }
  },
];
