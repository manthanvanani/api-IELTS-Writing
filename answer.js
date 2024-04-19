var fs = require("fs");

var request = require("request");

var _data1 = require(`./Raw/9Band.json`);
var _data2 = require(`./Raw/85Band.json`);
var _data3 = require(`./Raw/8Band.json`);
var _data4 = require(`./Raw/75Band.json`);
var _data5 = require(`./Raw/7Band.json`);
var _data6 = require(`./Raw/65Band.json`);
var _data7 = require(`./Raw/6Band.json`);

var ids = [];
for (let index = 0; index < _data1.length; index++) { if(_data1[index]['_id']){ ids.push(_data1[index]['_id']); }; }
for (let index = 0; index < _data2.length; index++) { if(_data2[index]['_id']){ ids.push(_data2[index]['_id']); }; }
for (let index = 0; index < _data3.length; index++) { if(_data3[index]['_id']){ ids.push(_data3[index]['_id']); }; }
for (let index = 0; index < _data4.length; index++) { if(_data4[index]['_id']){ ids.push(_data4[index]['_id']); }; }
for (let index = 0; index < _data5.length; index++) { if(_data5[index]['_id']){ ids.push(_data5[index]['_id']); }; }
for (let index = 0; index < _data6.length; index++) { if(_data6[index]['_id']){ ids.push(_data6[index]['_id']); }; }
for (let index = 0; index < _data7.length; index++) { if(_data7[index]['_id']){ ids.push(_data7[index]['_id']); }; }

console.log(ids);

var _fdata = [];
for (let index = 0; index < ids.length; index++) {
  const element = ids[index];
  _fdata.push({
    id : element,
    is_save : false
  })
}
saveFile();

// fetchData();

async function fetchData() {
  for (let index = 0; index < _data.length; index++) {
    const element = _data[index];
    if (element["_id"]) {
      let _final = await downloadData(element["_id"]);
      console.log(index , _final);
    }
  }
}

async function downloadData(_id) {
  let url = `https://writing9.com/_next/data/v-Zyu7obJJ9ItfjBWsNPW/text/${_id}.json`;
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
          let data_ = data["pageProps"];
          if (data_["text"]) {
            //console.log(data_["text"]);
          }
        }
      }
      resolve(true);
    });
  });
}


function saveFile() {  
  var filePath = './Raw/ids.json'
  fs.writeFile(filePath, JSON.stringify(_fdata), "utf8", (error) => {
    console.log(error);
  });
}