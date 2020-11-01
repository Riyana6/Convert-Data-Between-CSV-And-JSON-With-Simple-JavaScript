const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

/*CSVToJSON().fromFile("./NAT64_1_20.csv").then(source => {
    console.log(source);
    source.push({

    });
    const csv = JSONToCSV(source, {fields: ["No.", "Time", "Source", "Destination", "Protocol", "Length", "Info"]});
    FileSystem.writeFileSync("./destination.csv",csv);
});*/

CSVToJSON().fromFile("./NAT64_1_20.csv").then(source => {
    console.log(source);
    source.push({

    });
    //const csv = JSONToCSV(source, {fields: ["No.", "Time", "Source", "Destination", "Protocol", "Length", "Info"]});
    FileSystem.writeFile("./source.json",JSON.stringify(source, null), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON array is saved.");
    });
});