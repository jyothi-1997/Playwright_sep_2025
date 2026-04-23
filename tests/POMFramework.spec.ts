//class18

/* Framework: It is a design priniciple or set of guidelines to organize u r code in a better way
            : Reduction of duplicate code and maintenance
    
    POM(Page object model): It is a design pattern used in software testing to represent a webpage as an object
                          -  It is a way to organise and and manage interaction with a webpage(like login pages, register page,cart part,orders page etcc)
                            by creating the properties(variables) and methods(actions) of that particular page
                        -   In playwright properties are locators
    
    why POM farmework:  This approach helps in reducing the code and its very easy in terms of maintenance
                    - it reducing the code duplication, improve test maintainability and enhancing the readibility by 
                       encapsulating the page-specific logic with a dedicated class or modules.
                    - It separtes in layer manner 
                      eg: await page.locator("#firstName").fill("Naveen") 
                       here we have locator as locator layer
                       fill as method layer
                       "Naveen" as test data layer

    Different layers that we have to create:
    1. PAGE LAYER - will create a package or folder(pages). 
                  - locators and methods related to specific page 
                   eg: login(loginpage.ts) or dashboard(dashboard.ts) or cart(cart.ts)...etc pages
                    - Assertions should not be written inside page layer
    2. TEST LAYER - will create a package or folder(tests)
                  - It consists of pure testcases(complete step os testcase) and assertions
                  - we will call locators and methods inside the test layer from the page layer.
                    eg: LoginTest.spec.ts, dashboard.spec.ts, cart.spec.ts
                  - Hooks will come under Test layer
    3. DATA LAYER - Test data layer can be JSON/EXCEL/.env 
                  - eg: TestData.json, Testdata.excel, Testdata.env.qa(only qa data it will store), testdata.env.prod(only prod data it will store ))
                  - JSON(JavaScript Object Notation) 
                  - difference b/w JON and object is 
                  - JSON contains {"key" : value}.json - key will be passed as a string
                  - Object contains {key : value}.ts/js pair


    4. CONFIGURATION LAYER: which will be given inside playwrite.config.ts - global configuration
                          - no need to touch this except changing time, env, reports etc
    5. UTILS LAYER - We will create a utils folder inside our framework
                     we write custom functions - screenshot(),scrolldown(), get the data from excel, 
                     API token - to ge the token and bypass the login

    6. REPORT LAYER: HTML/Allure report - we do not create it separately in playwright

*/

//POM Framework from scratch: