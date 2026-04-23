//Javascript

//Selectorshub Extension

/* To work with playwright we need to install
1. node js --- it will install at C:\Program Files\nodejs\ --- check in cmd ---> node -v
2. npm(node packaging manager) - helps in installing,managing,sharing dependencies which gets installed
    by nodejs only ---> check in cmd --- nom -v   
2. Visual studio code

*/

/*
node js is used to execute the file which has written by JS
when u try to execute the file  which has written by TS, "node js" will not work here, here Typescript(tsx)
comes into picture ----tsx --typescript executor -- helps us in executing typescript file

How to check node 
js is installed or no ---- 
1. open visual studio code -> terminal ->New Terminal -> node -v
2.check for npm(installs dependencies) version -->terminal ->New Terminal -> npm -v
*/

/*
How to check git installed or no

1. open command prompt -> git -v

How to install playwright for visual studio code
1. open VS Code->extensions -> playwright test for VS code -> install -> test runner icon will shown on VS code page

where u want to save your project??
1. goto GitHub.com on browser-> search pw-practice-app -> click on bondar-artem/pw-practice-app  -> code -> copy the url/code to clone the application

2. create folder playwright_sep_2025 in documents section -> right click -> more options ->open in terminal -> Type git clone https://github.com/bondar-artem/pw-practice-app.git


How to open folder in VS Code app??
1. file -> open folder ->docs -> playwright_sep_2025 -> pw-practice-app
*/

/*
How to install dependencies???

1. new terminal --> npm install --force
2. npm start(we need to wait for sometime till we get its compiled successfully) --> open the application on localhost:4200(it will be visible in terminal)
3. To stop the application which is running on browser hit ctrl+c then check on browser
4. if u want to start again hit -> npm start

*/

/*
JavaScript Fundamentals:

new terminal --> npm init --> after that folder name will be displayed as package name: (js-fundamentals) --> click enter-enter till package.json is available under js-fundamentals folder

npm will offer us to create some default parameters for the file package.json
package.json is a configuration file for node js application


create folder-->lessons  ->create file under lessons as lesson1.js
write code on lesson1.js-> console.log("Hello world");
Goto terminal --> cd lessons -> node lesson1.js


Syntax:

JavaScript syntax defines two values
Literals(fixed values)
          The most important syntax rules for literals (fixed values) are:
                  Numbers are written with or without decimals--- eg: 10 or 10.01
		  Strings are text, written within double or single quotes-----Eg: "John Doe" or 'John Doe'

Variables(variable values)
	 Variables are containers for data
         Variables are containers or entities used to store the values and it can reassign the value for a variable
	 Variables must be identified with unique names
	 eg: let = "num" //let is a variable, num is value

JavaScript Keywords:
   let,var and const are javascript keywords
   javascript keywords are case-sensitive-----------it cannot be LET, Let, CONST, CONSTANT
   Hyphens are not allowed in JavaScript. They are reserved for subtractions.
   Underscore:-
       first_name, last_name, master_card, inter_city.

   Upper Camel Case (Pascal Case):
       FirstName, LastName, MasterCard, InterCity.

   Lower Camel Case:
       firstName, lastName, masterCard, interCity.

   JavaScript programmers tend to use lower camel case.

The rules for constructing names (identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter, a $ sign or an underscore (_).
Names are case sensitive (X is different from x).
Reserved words (JavaScript keywords) cannot be used as names.

JavaScript comments:
   single line comments------//
   double line comments-------/*comments*/



/*
Playwright-JavaScript

we require
1. node js library - npm(node package management)
2. vs code - Editor
3.Playwright - npm install libraryname (or) npm i library (or) npm init library
*/

/*
Playwright- TypeScript

1. node js library - npm(node package management)
2. vs code - Editor
3. Install Typescript - npm install typescript
4. Install tsx -npm install tsx
5. Playwright -  npm init playwright

*/



/*Install in Playwright Terminal
1. npm init playwright (or) npm install playwright(automatically it will download latest playwright) (or) npm install playwright@latest (or) npm install playwright@new version(new version mean 1.0.0 like that)->
2. select typescript
3. where to put your end to end tests -> tests
4. Add a GitHub actions workflow -> true if u have GitHub account else false
5. intall playwright browsers -> true
6. Happy hacking message should occur which means playwright has installed successfully
*/


/*Testcases 
Testcases are written under test
if u want to change tests folder name then goto playwright.config.ts and change under testDir: './tests'
*/

/*node_modules
-it is a folder which consists of all details of playwright which has diff classes, diff methods and it is automatically created by playwright
-no need to touch this file to edit or work as it has automatically downloaded by playwright
-it is the heart of the project is node_modules
-if u delete this nothing it will work
*/

/*test.mjs
Any import that u have todo then we need to refer test.mjs(mjs -> module in javascript) available under node_modules->playwright->test.mjs
*/

/*package-lock.json
all the installation that has done by playwright has kept in this folder by displaying version,name,devdependencies(installed by PW),license etc...
- no need to change anything here also
*/

/*playwright.config.ts
- second important folder after node_modules
- most of the features are available under this so this should not be deleted

--it is global configuration(whatever u wright here will be applicable for entire test automation or test files or testcase) file
-- we can mention like taking screenshots, videos, using diff browsers etc..

import - which helps to import some libraries,classes, call some function, methods
eg: to prepare food we need to collect some items that collecting is called import

export - either a class, function becomes public in nature and it can accessible anywhere inside u r framework



/* forbidonly: !!process.env.CI

--!!(ignores null value and considers value as true or false)
forbidOnly : when ci = true,  at that point of time it will fail the build if u have accidentally left test.only testcase
--whenever u have accidently left test.only testcase then it will fail the build in terms of test automation not coding
--test.only : means it will run only one testcase eventhough it has 1000 testcases
--process.env.ci : means it takes the value from environment variable or file when ci is true

--purpose of running in CI/CD pipeline : To run entire testcases we use ci/cd
*/



/* retries: process.env.CI? 2: 0(this can be changed to 1,2,3,..etc based on retries)
Retries - when u r test fails we will run one more time if it is coding issues or bug inside application

2:0 means
2 --> when u try to run CI/CD pipeline is true, if it fails then it will try to run 2 times as it is ternary operator
0 --> when u try to run outside CI/CD pipeline is false, if it fails then it will take 0 or 1 or 2 or 3

*/


/*reporter - generates reports in html or anyother elure reports but we should mention it using comma separated
any type of report can be generated
n number of reports can be generated at a time
*/


/*
use{ - whatever u write in this use key will be given to each and every testcase like screenshots, videos etc

trace - a log file that it generates

screenshot:'on' - means playwright autogenerates screenshots for each and every testcase
video :'on' - means playwright generates videos for each and every testcase
headless : false - means do not run testcase in headed mode as by default mode is headless mode
}
*/

/*commands
run playwright test -> npx playwright test
how to open report --> 
1.npx playwright show-report
2. goto node_modules -> playwritereport -> index.html -> right click -> copy path and open in browser
*/


//projects - whatever u write  here will be given to each and every testcase like browsers, run on mobiles etc..,



/*fully parallel:
fullyparallel and workers are dependent on each other
eg: to construct a building if one worker works it will take years but if 100 workers work it will finish soon
we have 4 diff scenarios-
1. fullyparallel = true and workers = 1  -->only one tcs will run in sequential order, if it is 2 it will run 2

2. fullyparallel = false and workers = 1 //sequential
no matter if fullyparallel is true or false as it executes in sequential order

3. fullyparallel = false and workers > 1 //test file will run in parallel mode

playwright by default it will run test files(available under tests) in parallel order but inside the file the testcase will run in sequential order
terminal --> npx playwright test --reporter=list to generate o/p in report format 

4. fullyparallel = true and workers > 1 //Testcase inside the file will run in parallel order

*/

/*workers - how many testcases or executors u can run at the same time we can mention as 1(for CI):10(10 tcs will run), 1:15(15 tcs will run )

1:10
1 is for CI and 10 is not for for CI

it will take 50% of CPU cores to run the process
- we can check cpu cores under system information->processor-> my system has 12 logical processors
- undefined means it will take 50% of logical cores
cores means which helps in parallel execution
*/


/*playwright commands
 npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test
    */

    /*Interview question - what is diff b/w websocket and HTTP
    HTTP client server connection is made each and everytime for multiple requests or testcases to execute whereas
    Playwright client server connect is made once for multiple tcs to execute
    */

/* Architechture of playwright
1. Based on its architecture playwright is speed
2. playwright makes use of websockets instead of HTTP requests
3. websocket means every application u see on internet works on client-server based architecture like nodjs,maven is also a server
   eg: google is client and search data like nodejs,maven applications is server
   VS code is client here for us and nodejs is a server for playwright as we write code in typescript or javascript 

How to execute tescase in playwright?
Run the testcase ->websocket(client) will give to server(nodejs)
-> checks config file and respective tcs -> if everything is correct iit executs tests folder -> execution completed,connection will terminate
whereas selenium works on HTTP connection 

*/

/*
example code:
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/


 // function(normal function) and =>(arrow function) represents as function and we can use any of it
 //eg:  test("Browser Fixture", async function ({browser}){}) or  test(" Page Fixture", async ({page}) => {})

//Run single testcase on terminal: npx playwright test tests/UIBasics.spec.ts

/*Auto-waiting Concept:
            Auto-wait means playwright by default it will automatically wait for certain period of time as the elements on the 
            webpage to be visible and certain other things it will check and they are listed below
                1. locator should match with only one element on webpage and it will not work for multiple elements
                2. element is visible
                3. element is stable, 
                4. element is ready to accept any kind of events eg: open eent, hover event, close event etc..,
                5. element is enabled
            default timeout for playwright is 30sec for Auto-waiting concept and we can update in config file too
            99% methods in playwright will fall under Auto-wait concepts
        not Auto-Wait Methods:
                1. allTextContentx()
                2. allInnerTexts()


Autowait concept: playwright by default it waits for 30sec 
Assertion waiting period: playwright by default it waits for 5sec

        */

/*Methods: 
      1. const context = await browser.newContext();
      browser.newcontext will just launch the browser and returns some response
      2.const page = await context.newPage()context.newpage will open a page on browsercontext
      3. dblclick(): will double click on the element
      4. click({button: 'right'}): it will right click on the element
      5. tobevisible(): it will validate if the element is visible on page or not
      6. click(): It will click on the element
      7. scrollIntoViewIfNeeded(): it says scroll down if needed
      8. toHaveURL("url"): It will validate the url with current page url
      9. hover() - it will hover on the element
      10. toBeChecked(): 1. it helps us in validating if the raio button/check is selected/checked or not
                           2. it will work only for radiobutton or checkbox
                           3. it is assertion method
            check(): 1. it will work only for radiobutton and checkbox
                     2. it is a method which means palywright specific method
      11. click(): 1. click() will be applicable on any of the button
                     2. click() will click on any of the eleemnt
            check(): 1. click() will be applicable only on radiobutton and checkbox
                     2. check() will first validate if radiobutton or checked is already checked.If it is not checked
                        already then it will click on element
      12. textContent(): get the text value from an element even if the element is disabled on the webpage
      13. innerText(): get the text value ONLY from visible element on the webpage   
      14. alltextContents()/ allinnerTexts(): it will return all the matching values
      15. fill('value'): used to fill the value in input field
      16. toHaveValue("value"): This is an assertion which helps us in validating only "input" field 
          having value as "value"(any value like student,rest...)
      17. toHaveText(): This is an assertion which helps us in validating if an element is "text" field having value as "text"
                      It will work for any of the values
          toContainText(): This is an assertion which helps us in validating if an element "contains" a text  having value as "contain text"
                         It will work for any of the values

*/

/*Playwright Trace viewer: 3 diff buttons
  Action:It will say that what and where is the next action it performs
  Before: Before performing the action at that particular step
  After: After performing the action at that particular step
  LOcator: locator details will be available
  Call: what is the call it made and its respective start time,strict,locator will be shown
  Log: It loads the logs of execution steps
  Errors: If any errors are present then it will display here
  Console: If any console errors are present it will display
  Network: whatever API is called, it will record here
  Source: It will take all the source code which is written in test file
  Attachments: Along with videos it will be present here

Each and every step the screenshot is captured and available under "Actions" Tab

*/

/*Opening Excel in Playwright:
1. goto terminal -> add excel viewer extension
2. just copy,paste your excel file under TestData or directly save it from your folder structure
3. First it will check for which excel and sheet number
4. First row is considered as "Headers" part which refers to "Key" in {key: value} pair

*/


/*errors: 
    Property 'prototype' is missing in type 'dashBoardPage' but required in type 'typeof dashBoardPage'.
    ans:
    It will occur when u mismatch (:) with (=)
    eg: i have declared dashboardpage globally with "=" symbol like "let dashboardpage =  dashBoardPage;"
    when u call inside beforeeach as "dashboardpage = new dashBoardPage(page)" it will throw error
    so u should decare globale variable with (:) symbol "let dashboardpage :  dashBoardPage;"
*/



















