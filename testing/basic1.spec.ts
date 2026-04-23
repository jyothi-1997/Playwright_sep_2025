
/*Test file - whereever u try to write testcase then we can call it as test file
filename.spec.ts(99% organisation will use) 
filename.test.ts (1% orgs use) this noman clature we use for file
              
 */ 


//test(writing testcase) and expect(writing assertion means validation) are functions available under @playwright/test.mjs so this is called as framework because of test ,expect

import {test, expect} from '@playwright/test'

/* async - await concept
 async and await will go together
 async - will goto functional level and await will go stepbystep
 await - await is not to wait for an element on browser bcoz playwright will automatically do
         await will go and execute step by step until it finishes and waits for response also either it is rejected or success 
 JS & TS are asynchronous(means which will not execute step by step) programming language

 await will give us promise for each and every line
 promise - pending,rejected, successful:
 successful means code is execute without error
 rejected means due to some error in code its rejected
 pending means still trying to performing actions

*/

test("Login Validation", async function({page}){ //login validation is title and title should be unique across test file
        //Test steps
        //expect
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.locator("#username").fill("student")
        await page.locator("#password").fill("Password123")
        await page.locator("#submit").click()
        await expect(page.locator("h1.post-title")).toBeVisible()


})


