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

// *******convert users.csv file to JSON array
/*(async () => {
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
    
})();*/

// read JSON from a file
//******* */ convert JSON array to CSV string

/*
const source = JSON.parse(FileSystem.readFileSync('users.json'));


(async () => {
    try {
        const csv = JSONToCSV(source);

        // print CSV string
        //console.log(csv);

        // write CSV to a file
        FileSystem.writeFileSync('users.csv', csv);

    } catch (err) {
        console.log(err);
    }
})();
*/import {saveAs} from 'file-saver';

function createCsv() {
    let csv = ''
    let row = ''
    let headers = ''
    headers = headers.concat('collection', ',', 'collection_uid', ',', 'survey', ',', 'survey_uid', ',', 'question', ',', 'answer')
    csv = csv.concat(headers)
    data.forEach(answer => {
        row = ''
        // you need to start your row with \n such that excel would know that is the new line 
        // you can use other delimiters of course, I found this one to be easily picked up by Excel
        row = row.concat("\n",
            your.data.goes.here, ",",
            your.data.goes.here, ",",
            answer
        )
        csv = csv.concat(row)
    })

    // create the blob declare it as csv
    const textBlob = new Blob([csv], {type: 'application/csv'})
    //you don't really need this 
    const csvFile = new File([textBlob], "users.csv", {
        contentType: "application/csv"
    });
    // this sets state for the component 
    setCsvForExportFileURL(textBlob)
    // this sets state variable that displays the button after csv has been created
    setShouldShowDownloadButton(true)
}




//in your render method you will have something like
{
    shouldShowDownloadButton && // display the button
    csvForExportFileURL && // and the url has been created
    <Button color={'primary'} variant={"contained"}
            onClick={saveAsCsv.bind(saveAsCsv)} // go to saveAsCsv method
            className={classes.button}>download answers</Button>
}

// you could have done this in line above but I find this neater
function saveAsCsv() {
    saveAs(csvForExportFileURL, 'ella_all_answers.csv')
}