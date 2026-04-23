//class 22

/*Stepbystep Process to work with excel

Excel is known as spreadsheet

1. By default excel is not supported by JS/TS so we need to install library but json will support
2. so install 'xlsx' library --- npm install xlsx --- (npm install --save-dev xlsx)
3. create and store the excel file inside the TestData
4. create a reusable function which helps us in terms of reading the excel file
5. Convert the excel data into json format and return json format data from the function
6. call the function inside the test file to use the data as a part of datadriventesting.



==>All the dependencies are available under devdependencies inside package.json whatever we have installed earlier
 "devDependencies": {
    "@playwright/test": "^1.58.1",
    "@types/node": "^25.6.0"
  }
==>when u say "npm install --save-dev xlsx" will install inside dev dependencies in package.json file
now it would be 
"devDependencies": {
    "@playwright/test": "^1.58.1",
    "@types/node": "^25.6.0",
    "xlsx": "^0.18.5"
  }
*/