
import {saveAs} from 'file-saver';

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
    const csvFile = new File([textBlob], "ella_all_answers.csv", {
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
export default App;