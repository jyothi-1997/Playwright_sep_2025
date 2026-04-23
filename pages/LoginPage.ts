//class 18,19

import { Locator, Page } from "@playwright/test";

//locator and methods related to login page only
//page-test-data we should write in this manner

//to make it public use export
export class LoginPage{

    //properities - locators for loginpagetestwithouthooks

    page : Page // passing here page(object) as global variable and Page is datatype
    username : Locator // username is a variable and it stores locator
    password : Locator
    loginBtn : Locator
    homePageIdentifier : Locator //once successfull login just validate any of the home link or anyother thing
    errormsg: Locator

    // while u create an object(inside test->loginpagetestwithouthooks.spec.ts->loginpage) for the class(page->LoginPage) it refers to constructor
    //this is a keyword refers to current class object(which is present in tests->loginpagetestwithouthooks.spec.ts)
    constructor(page : Page){ // constructor initializes the value of the variable, page is parameter(refers to const loginpage = new LoginPage(page)) and Page is datatype
            this.page = page //here "this" is tests->loginpage object(line 14) and this.page(variable name) is the page fixture and given value as page

            //to write locator we need page
            //Initialised the locators inside constructor
            this.username = this.page.getByPlaceholder("email@example.com") //here "this" refers to LoginPage class -- LoginPage.username --directly we cannot write using classname and it will throw so we should use this keyword
            this.password = this.page.getByPlaceholder("enter your passsword")
            this.loginBtn = this.page.locator("#login")
            this.errormsg = this.page.locator("toast-container")
            this.homePageIdentifier = this.page.locator("[routerlink = '/dashboard/myorders']")
    
     }

     /*1. launch the url
        2. loginIntoApplication()
        --fill the username
        --fill the password
        --click on the login button
        3. InvalidLogin()
        --fill the username
        --fill the password --Invalid Password
        --click on the login button
    */

    async launchUrl(url: string){ //function should start with async
          await  this.page.goto(url)
        }

    async loginIntoApplication(username: string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
 
    async invalidLogin(username: string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
    }





    /*Brief Understanding:

    here the concept is we have created a class "LoginPage()" and object(loginpage) and this object is getting
    called from "loginpagetestwithouthooks.spec.ts" and in that particular object we are passing page fixture as 
    "const loginpage(object) = new LoginPage(page)" ---loginpage(object), LoginPage(class), page(page fixture) and
    page fixture is accessible only inside test() function  and cant be accessed in class(LoginPage) so for that whenever we need
    write testcase we need to create object and pass pagefixture so that class will have access for that 
    particular page and we can call page.locators in constructor(page: Page) function

    constructor(page : Page) -->Page is a parameter and arguments are passed in "const loginpage(object) = new LoginPage(page)"
     eg: constructor(page : Page, day, 22) -->multiple parametrs are present and we should pass multiple arguments until
     unless it is optional "const loginpage(object) = new LoginPage(page, day, 22, 56?)"
    */




