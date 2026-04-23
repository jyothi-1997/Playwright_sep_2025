//class19

import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


 const url = "https://rahulshettyacademy.com/client/#/auth/login"
 const username = "Naveen@gmail.com"
 const password = "Reddy@36"
 const incorrectpassword = "bsdhuysgq"

test("Valid login test", async({page}) =>{

    const loginpage = new LoginPage(page) //LoginPage() refers to the constructor of LoginPage
    await loginpage.launchUrl(url)
    await loginpage.loginIntoApplication(username, password)
    await expect(loginpage.homePageIdentifier).toBeVisible()

})


test("invalid login test", async({page}) =>{

    const loginpage = new LoginPage(page)
    await loginpage.launchUrl(url)
    await loginpage.loginIntoApplication(username, incorrectpassword)
    expect(loginpage.errormsg).toHaveText("Incorrect email or password.")
    
})