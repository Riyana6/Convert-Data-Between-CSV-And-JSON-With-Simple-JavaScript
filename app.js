const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const FileSystem = require("fs");

CSVToJSON().fromFile("./NAT64_1_20.csv").then(source => {
    console.log(source);
    source.push({

    });
});