//Testcase file is child

import {test,expect} from "@playwright/test"
import { LKMLoginPage } from "../pages/LKMLoginPage"


     const url = "https://lkmdemoaut.accenture.com/TestMeApp/loginhere.htm"
     const username = "LKMDEMO"
     const password = "LKMDEMO"
     const Incorrectpassword = "bujhn"

     //write a Testcase for LKM Lofin page
    test("Testcase for pagefixture and launch url", async({page})=>{

    const lkmloginpage = new LKMLoginPage(page);
    await lkmloginpage.launchlkmurl(url)
    await lkmloginpage.loginIntolkmapplication(username, password)
    await expect(lkmloginpage.homepageidentifier).toBeVisible()

    })


    //write a testcse for Invalidlogin page
    test("Testcase for InvalidLogin", async({page})=>{
     
     const lkmloginpage = new LKMLoginPage(page)
     await lkmloginpage.LKMInvalidlogin(username, Incorrectpassword)
     expect(lkmloginpage.errmsg).toHaveText("Username or Password is wrong here!!!")

    })

