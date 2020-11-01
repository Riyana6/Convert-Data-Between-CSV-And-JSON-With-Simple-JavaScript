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

/*CSVToJSON().fromFile("./NAT64_1_20.csv").then(source => {
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
});*/

// require csvtojson module

// convert users.csv file to JSON array
(async () => {
    try {
        const users = await CSVToJSON().fromFile('NAT64_1_20.csv');

        // log the JSON array
        console.log(users);
        FileSystem.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });

    } catch (err) {
        console.log(err);
    }
    
})();