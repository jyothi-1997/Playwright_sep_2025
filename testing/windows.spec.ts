//class12

/*Multiple tabs or windows: known as "popup event"
            const newpage = await page.WaitforEvent('popup') //clicked on dialog box and new tab is opened


1. step by step process to handle multiple tabs/windows in playwright
    a. launch the url
    b. identify and click on the element which is responsible for generation of a popup event(means new tab/window)
    c. use "page.waitforevent('popup') to capture or wait for popup event to appear on page
       This waitforEvent('popup') will return a new page object which we can use to perform further actions 
       on new tab/window
         const newpage = await page.WaitforEvent('popup') //clicked on dialog box and new tab is opened
    d. performing any action on new tab/window, we must use newpage object
    e. come back to the main/original page and perform the action by using orginal page fixture
    f. To make the active tab/window to the new tab/window or back to original page
        we can use "bringToFront()" method
    */

import{test, expect} from '@playwright/test'

test("Multiple windows/tabs handling", async({page}) =>{

    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent('popup')

    //click on the event which is responsible for generation of "popup" event
    await page.locator("#Tabbed button").click() 

    const newPage = await page1
    console.log(newPage)
   
    //playwright will not automatically wait for popup event so we need to write waitforevent() method
   // const newPage = await page.waitForEvent('popup') // waiting for popup event to appear on the page but if it waits 
   //for more than 30sec it will fail so refer line 26,31,32 and it will not havw any issues
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("#bindings")).toHaveText("Selenium Clients and WebDriver Language Bindings")

    await page.bringToFront()

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()


})