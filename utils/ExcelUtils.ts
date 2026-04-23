//class22
//library is also a tool which contains packages, classes, methods etcc..,

import xlsx from 'xlsx'

export class ExcelUtils{

    //we need filepath
    //we need sheetname

    //Main goal of reusable function is wherever u want to utilize with sheet,filepath etc.. we can use in
    // same funtion no need of using multiple functions
    //If u harcode filepath and sheet here(but not inside class), u cannot use getExceData() for multiple other functions
    filepath = ""
    sheetname = ""

    static getExcelData(filePath: string, sheetName: string){ 
        //exception Handling
        try {
            //whatever the action u want to perform please perform here
            const workbooks = xlsx.readFile(filePath) //which will try to read the file which u r going to mention in filePath and it return the entire values which are present inside excel
            //workbook - acts as {key:value} pair, key is sheetname value is values inside u r excel
            const sheet = workbooks.Sheets[sheetName] //object sheet consists of value present inside particular sheet of xlsx

           const jsonData = xlsx.utils.sheet_to_json(sheet) //inside utils class we have method called sheet_to_json which converts worksheet object to an array of JSON objects
            return jsonData;


        } catch (error) {
            console.log(error)
        }

    }



}