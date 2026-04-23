//class14:

/*Frames: Frames is another html page
          If u want to integrate  one html page inside another html page then we need to take help of iframes
          Any webpage which is developed it starts and ends with html tage
          
          Page fixtures will not be able to handle another webpage or html page
          Page fixtures will havevisiblity for outer html page. It will also be able to identify the iframe on the page
          Page fixtures cant handle inside html or nested html pages
          
          eg:

          <html>  - outer html page
              <iframe> const fp = page.framelocator('iframe')
                    <html>  - inside html page - fp.locator().click()
                        <iframe> const fp1 = fp.framelocator('ifame')
                                <html>    <html/> - nested html page
                        <iframe/>
                    <html/>
                <ifame/>
          <html>


*/

import{test, expect} from '@playwright/test'

test("handling Frames", async({page}) =>{

    await page.goto('https://demo.automationtesting.in/Frames.html');
    
    //testcase will fail with this step as page fixture will not identify frames using normal locators so we need to use frame locator(iframe tags only in DOM)
    //await page.locator("[type='text']").first().fill('single frame') 
    
    /*framelocator("selector") - returns framelocator object which helps us to enter into the frame 
                              and perform the actions on the lemnets inside the frames
      Frames concept acts like multiple tabs/windows concept - here a new tab/window is opened but in frames concept
      it will be on page but it will enter into iframes box
    */

    //page.locator('iframe[name="SingleFrame"]).contentframe() ---another way of writing code of line 42 
    const framePage = page.frameLocator("#singleframe")
    await framePage.locator("[type='text']").first().fill('single frame') 
    await expect(framePage.locator("[type='text']")).toHaveValue('single frame')

    //Nested iFrames:
    await page.getByText("Iframe with in an Iframe").click()
    const outerframe = page.frameLocator("#Multiple iframe") //outerframe has visibility of page fixtures
    const innerframe = outerframe.frameLocator(".iframe-container iframe") //innerframe will not have page fixtures so we should use outerframe
    await innerframe.locator("[type='text']").first().fill('Nested frame') 
    await expect(innerframe.locator("[type='text']")).toHaveValue('Nested frame')

    
    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})