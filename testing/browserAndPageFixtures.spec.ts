/*Fixtures - fixtures a special type of function or object available inside playwright
             which helps to perform certain things
           -  setup(setup browser automatically) and teardown(closing browser automatically) process automatically
           - also known as global object available inside playwright 
           
browser fixtures: it will just launch the browser
                 it will identify complete browser which means on many pages it will have control
                command - npx playwright test "browserAndPageFixtures.spec.ts" -g "Browser\s+Fixture$"
                 eg: consider practiceautomation page is opened(which has access for everything on this page) and 
                some link has come, opened in another tab then browser fixture will have control onit

use of browser fixtures: 
        1. same work flow testing - eg: 1. add the product to cart, 2. view the details of the product , 3...
        2. multiple pages on same browser testing
             
Page fixtures: it will have control on only one page visibility
                eg: consider practiceautomation page is opened(which has access for everything on this page) and 
                some link has come, opened in another tab then pagefixture will not have control 
                Page fixture is only available inside the test() function and nowhere it can be used
 most of the time in test automation we use page fixture            
                */

import {test, expect} from '@playwright/test'; 

// every test function by default it will get page and browser fixtures
//inside page() we should write browser in {} braces and it will consider as parameter
 test("Browser Fixture", async function ({browser}) {

    //browser - it will not autolaunch the browser
    // we need to create a browser context/instance -context means instance of a browser - instance means to launching of a browser
    // we need to create page as well
    const context = await browser.newContext(); //browser.newcontext will just launch the browser and returns some response
    const page = await context.newPage() //context.newpage will open a page on browsercontext
    await page.goto("https://google.com")

    const page1 = await context.newPage()
    await page1.goto("https://facebook.com")

    const page2 = await context.newPage()
    await page2.goto("https://linkedin.com")

    //open another browser and its page
    const context1 = await browser.newContext();

    const newpage = await context1.newPage()
    await newpage.goto("https://instagram.com")

    await newpage.waitForTimeout(2000); // will wait for 2sec

 });

 // function(normal function) and =>(arrow function) represents as function and we can use any of it

 test(" Page Fixture", async ({page}) =>{

 });
