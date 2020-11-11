const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");
const source = JSON.parse(FileSystem.readFileSync('data.json'));
(async () => {
    try {
        const csv = JSONToCSV(source);

        // print CSV string
        //console.log(csv);

        // write CSV to a file
        FileSystem.writeFileSync('data.csv', csv);

    } catch (err) {
        console.log(err);
        
    }
})();
/*
const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");

(async () => {
    try {
        const users = await CSVToJSON().fromFile('NAT64_1_20.csv');

        // log the JSON array
       // console.log(users);

        //create json file
        FileSystem.writeFile('data.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });

    } catch (err) {
        console.log(err);
    }
    
})();*/
