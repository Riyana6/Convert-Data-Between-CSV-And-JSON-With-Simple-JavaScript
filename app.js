const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");
const source = JSON.parse(FileSystem.readFileSync('user.json'));
(async () => {
    try {
        const csv = JSONToCSV(source);

        // print CSV string
        console.log(csv);

        // write CSV to a file
        FileSystem.writeFileSync('newuser.csv', csv);

    } catch (err) {
        console.log(err);
        
    }
})();