//class17

/*Visual Testing: look and feel
    It is a process used to compare screen by screen inside a page is called Visual Testing
    it takes screenshot and compares it at the time of execution

*/

import {test, expect} from '@playwright/test'

test("Visual Testing", async({page}) =>{

    page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(5000)
    
    //line 17 code: page.screenshot() capture screenshot of present page and stores in test folder
    // tomatchsnapshot() compare the snapshot which is stored in test folder
    await expect(await page.screenshot()).toMatchSnapshot('screen1.png') // first when u execute it will fail and again execute it will fail due to pixel issues


})