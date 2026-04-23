//class16,17

/*keyboard operations
    keyA-Z
    copy paste
    Arrow left/right/up/down
    digit 0=9
    shift keyword



*/

/*press()
  type()
  down()
  up()


*/

import {test, expect} from '@playwright/test'

test("Keyboard Operations", async({page}) =>{

    await page.goto("https://demoqa.com/automation-practice-form")
    await page.getByPlaceholder("First Name").fill("Test Usr")
    
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.type('e')
    await page.keyboard.press("ArrowRight")
    await page.keyboard.type('s')
    await expect(page.getByPlaceholder("First Name")).toHaveValue('Test Users')

    await page.keyboard.press('Tab') //Tab will move to next field in webpage
    await page.keyboard.type("Reddy@")
    await page.keyboard.press("Backspace")
    await expect(page.getByPlaceholder("Last Name")).toHaveValue("Reddy")

    
    /*steps:
    1. launch url
    2. enter Testing in first name field and ctrl+A, ctrl+c and Tab it to next field email
    3. paste the Testing and delete it after validating


    */
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill("Testing")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+c")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+v")
    await expect(page.locator("#email")).toHaveValue("Testing")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Delete")
    await expect(page.locator("#email")).not.toHaveValue("Testing")

    //upper case letters
    await page.keyboard.press("Tab")
    await page.keyboard.down("Shift") //press the shift button
    await page.keyboard.press("KeyA")
    await page.keyboard.press("KeyB")
    await page.keyboard.up("Shift") //release the shift button

   

})