//class19

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


 const url = "https://rahulshettyacademy.com/client/#/auth/login"
 const username = "Naveen@gmail.com"
 const password = "Reddy@36"
 const incorrectpassword = "bsdhuysgq"

 let loginpage : LoginPage; //globally declared can be used anywhere in the script

//  test.beforeAll(async ({browser}) =>{
//     const context = await browser.newContext(); //beforeAll supports only browser fixture but not page fixture
//     const page = await context.newPage()
//     loginpage = new LoginPage(page)
//     await loginpage.launchUrl(url) //In beforeAll - url will launch only once

//  })

test.beforeEach(async({page}) =>{
    // let loginpage = new LoginPage(page) --> will not work as "loginpage" is already declared globally not need to declare again.
    loginpage = new LoginPage(page) //page fixture is applicable for beforeEach 
    await loginpage.launchUrl(url) //url will launch for each test case

})


test("Valid login test", async({page}) =>{

    await loginpage.loginIntoApplication(username, password)
    await expect(loginpage.homePageIdentifier).toBeVisible()

})

test("invalid login test", async({page}) =>{

    await loginpage.loginIntoApplication(username, incorrectpassword)
    expect(loginpage.errormsg).toHaveText("Incorrect email or password.")
    
})