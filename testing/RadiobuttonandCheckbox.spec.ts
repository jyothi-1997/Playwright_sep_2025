/* Radio button:
                  just click on the radio button and once clicked it cannot be unchecked but it can be 
                  switched to one another 
            difference b/w check() and tobechecked():
            toBeChecked(): 1. it helps us in validating if the raio button/check is selected/checked or not
                           2. it will work only for radiobutton or checkbox
                           3. it is assertion method
            check(): 1. it will work only for radiobutton and checkbox
                     2. it is a method which means palywright specific method


            difference between click() and check():
            click(): 1. click() will be applicable on any of the button
                     2. click() will click on any of the eleemnt
            check(): 1. check() will be applicable only on radiobutton and checkbox
                     2. check() will first validate if radiobutton or checkebpx is already checked.If it is not checked
                        already then it will click on element

        */


import {test, expect} from '@playwright/test'


//based on title also testcase can also be executed - npx playwright test -g "Handling Radio button and Checkbox"
test("Handling Radio button and Checkbox", async({page})=> {

        await page.goto("https://testautomationpractice.blogspot.com/")
        const radiobtn = await page.getByRole("radio", {name: 'Female'})

        await expect(radiobtn).not.toBeChecked() //first it will validate whether the radiobtn is checked or not by default it will not be checked
        await radiobtn.click() // it will simply go and click on the radio button
        await expect(radiobtn).toBeChecked() //it will be checked on radiobutton

        const checkbx = await page.getByRole("checkbox", {name: 'Thursday'})
        //await checkbx.click() - first click and check() if we use both will work in same way and testcase will get passed
        await checkbx.check() 
        await expect(checkbx).toBeChecked() //it will validate if element is checked or no
        

        const checkbx2 = await page.getByRole("checkbox", {name: 'Wednesday'})
        await checkbx2.check()
        await checkbx2.uncheck() // it will jist uncheck the element
        await expect(checkbx2).not.toBeChecked()

        const allcheckboxes = await page.locator("//*[@class='form-group'][4]").allTextContents()
        console.log(allcheckboxes)

 })

 test("Getting text from an element and multiple elements", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    /* textContent(): get the text value from an element even if the element is disabled on the webpage
       innerText(): get the text value ONLY from visible element on the webpage   
    
       alltextContents()/ allinnerTexts(): it will return all the matching values
       */
    const singletext = await page.locator("h3.post-title").textContent()
    console.log(singletext)

    const multipleelements = await page.locator("h2.title").allInnerTexts()
    console.log(multipleelements)

 })