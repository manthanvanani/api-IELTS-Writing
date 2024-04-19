const { error } = require("console");
var request = require("request");

var filePath = `./Raw/6Band.json`;
var allData = [];

var total = 1512;
var link = [];

getData();

async function getData() {
  for (let index = 0; index < total; index++) {
    let url = `https://writing9.com/_next/data/v-Zyu7obJJ9ItfjBWsNPW/band/6/${index}.json`;
    let data = await downloadData(url);
    console.log(index, data);
  }
  saveFile();
  console.log("allData:", allData.length);
}

async function downloadData(url) {
  return new Promise(function (resolve, reject) {
    var options = {
      method: "GET",
      url: url,
      headers: {},
    };
    request(options, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        let data = JSON.parse(response.body);
        if (data["pageProps"]) {
          let data_ = data["pageProps"]["data"];
          for (let index = 0; index < data_.length; index++) {
            const element = data_[index];
            allData.push(element);
          }
        }
      }
      resolve(true);
    });
  });
}

function saveFile() {
  var fs = require("fs");
  fs.writeFile(filePath, JSON.stringify(allData), "utf8", (error) => {
    console.log(error);
  });
}
