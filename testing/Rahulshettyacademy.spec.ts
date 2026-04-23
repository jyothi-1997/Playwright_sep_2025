//practice

import {test, expect} from '@playwright/test'

test("Rahulshettyacademy practice", async({page}) => {

    //click on ragister link and validate
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.waitForTimeout(5000)
    await page.locator("a.text-reset").click()
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/auth/register")
    const url = await page.url()
    console.log(url)

    //registration should complete
    await page.locator("#firstName").fill("Naveen")
    await page.getByPlaceholder("Last Name").fill("Tutorial1")
    await page.locator("#userEmail").fill('Naveen@gmail.com')
    await page.locator("#userMobile").fill("1234567890")
    
    const occupation = await page.locator("select.custom-select") //select concept available under dropdowns
    await  occupation.selectOption("Student")//class11 : 45:00
    
    const radiobutton = await page.getByRole("radio", {name: 'Female'})
    await radiobutton.click()
    await expect(radiobutton).toBeChecked()

    await page.locator("#userPassword").fill("Reddy@36")
    await page.locator("#confirmPassword").fill("Reddy@36")
    const checkkbx = page.locator("input.ng-pristine")
    await checkkbx.last().check()
   // await expect(checkkbx).toBeChecked()

   //everytime new user will be created bcoz of line 35,36,37 so will directly jump to login page but u can validate when showcasing
    // await page.locator("#login").click()
    // await expect(page.getByText("Account Created Successfully")).toBeVisible()
    // await page.locator("button.btn-primary").click()


    await page.goto("toast-container")
    await page.getByPlaceholder("email@example.com").fill("Naveen@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Reddy@36")
    await page.locator("#login").click()
    

})