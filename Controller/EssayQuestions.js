var EssayQuestionsModel = require("../Model/EssayQuestions.js");

exports.get = [
  async (req, res) => {
    try {
      var params = req.body ?? {};
      console.log(params);
      var data = await EssayQuestionsModel.find(params);
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
