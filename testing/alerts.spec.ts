//class11

/*1. Alerts/pop-ups: is also known as 'dialog' events
 popup and popup events are different
 "popup" is also known as 'dialog' event
 
 2. multiple tabs/windows: "popup events" is used to deal with multiple tabs/windows
                            const newpage = await page.WaitforEvent('popup') //clicked on dialog box and new tab is opened

 3. File Download - "Download" event

Different type of alerts are available:
1. simple Alert - single button is available
2. confirm Alert - two buttons are available (eg:ok and cancel)
3. prompt Alert - Along with 2 buttons we will have text box

*/


/*playwright has created a class called 'dialog'
    accept() - click on ok/submit/yes
    dismiss() - click on cancel/No
    message() - get the text value that is displaying on the alert
    */


    import{test, expect} from '@playwright/test'

    test("Alert handling", async({page}) =>{

        await page.goto("https://testautomationpractice.blogspot.com/")
        
        //dialog event
        page.on("dialog", (dialog) =>{
            console.log(dialog.message())
            dialog.accept("Test") // if text field is present then it will enter "Test" else it will neglect and just click on ok
        })
        
        await page.locator("button#alertBtn").first().click()
    
        await page.locator("button#confirmBtn").first().click()
        await expect(page.locator("#demo")).toHaveText("You pressed OK!")

        await page.locator("button#promptBtn").first().click()
        await expect(page.locator("p#demo")).toContainText("Hello Test!")

        



    })