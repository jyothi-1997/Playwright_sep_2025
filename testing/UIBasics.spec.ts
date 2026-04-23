import {test, expect} from '@playwright/test'

test("handling input field and clicking on element", async({page}) =>{

        //launch the browser
        
        /*Run single testcase on terminal: npx playwright test tests/UIBasics.spec.ts
            1. goto url: It will help us to launch url in the browser, 
            Note: the url should have http or https in double quotes or single quotes else "protocol" error will display
        */
        await page.goto('https://practicetestautomation.com/practice-test-login/')
        
        /* fill the username and expect the userename field should have value as "entered value"
        In DOM if u find same matching username in scripts then ignore it 
            1. fill('value'): used to fill the value in input field
            2. locator("selector"): to identify the element on the webpage using css selector or xpath
            3. Assertion: comparing actual value with expected value
            4. toHaveValue("value"): This is an assertion which helps us in validating only "input" field having value as "value"(any value like student,rest...)
            5. expect() is hard assertion
            */
        await page.locator("#username").fill("student")
        await expect(page.locator("#username")).toHaveValue("student") //playwright by default it will wait for 5sec for assertions

        
        //fill the password and expect the password field should have value as "entered value"
        await page.getByLabel("Password").fill("Password123")
        await expect(page.getByLabel("Password")).toHaveValue("Password123")

        
        //click on submit/login button - click(): justs clicks on the element
        await page.getByRole('button', {name : 'Submit'}).click()

        /*validation:expect there should be an element which have test as "Loggedin Successfully"
        toHaveText(): This is an assertion which helps us in validating if an element is "text" field having value as "text"
                      It will work for any of the values
        toContainText(): This is an assertion which helps us in validating if an element "contains" a text  having value as "contain text"
                         It will work for any of the values
        */
       await expect(page.locator(".post-title")).toHaveText("Logged In Successfully")
       await expect(page.locator(".post-title")).toContainText("Successfully")




        /*errors:
            1. the url should have http or https in double quotes or single quotes else "protocol" error will display
                    await page.goto('//practicetestautomation.com/practice-test-login/')
            2. unexpected value "student"error is received as "S" is capital like: expect(locator).toHaveValue(expected) failed
                    await page.locator("#username").fill("student")
                    await expect(page.locator("#username")).toHaveValue("Student")
            3. element(s) not found error is received as we have removed "#" from a locator value
                    await page.locator("#username").fill("student")
                    await expect(page.locator("username")).toHaveValue("student")
        */

        /*Auto-waiting Concept:
            Auto-wait means playwright by default it will automatically wait for certain period of time as the elements on the 
            webpage to be visible and certain other things it will check and they are listed below
                1. locator should match with only one element on webpage and it will not work for multiple elements
                2. element is visible
                3. element is stable, 
                4. element is ready to accept any kind of events eg: open event, hover event, close event etc..,
                5. element is enabled
            default timeout for playwright is 30sec for Auto-waiting concept and we can update in config file too
            99% methods in playwright will fall under Auto-wait concepts
        not Auto-Wait Methods:
                1. allTextContent()
                2. allInnerTexts()
        */

        /* Radio button:
                  just click on the radio button and once clicked it cannot be unchecked but it can be 
                  switched to one another 
            toBeChecked(): it helps us in validating if the radio button/check is selected/checked or not
                           it will work only for radiobutton or checkbox

        */
       


});

test("Handling Radio button and Checkbox", async({page})=> {

        await page.goto("https://testautomationpractice.blogspot.com/")
        const radiobtn = await page.getByRole("radio", {name: 'Female'})
        await radiobtn.click() // it will simply go and click on the radio button
        await expect(radiobtn).toBeChecked()

       })
