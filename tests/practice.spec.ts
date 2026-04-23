//practice

import {test, expect} from '@playwright/test'

test("Rahulshettyacademy practice", async({page}) => {

    //click on ragister link and validate
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByPlaceholder("email@example.com").fill("Naveen@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Reddy@36")
    await page.locator("#login").click()
    await page.locator('button').filter({ hasText: 'Add To Cart' }).first().click()
    await page.locator('button').filter({ hasText: 'Add To Cart' }).last().click()
    const clic = await page.locator("button[routerlink='/dashboard/cart']").click();
    console.log('clicked=='+clic)

    await expect(page.locator("li.items")).toHaveCount(2)

    const listofitems = await page.locator("li.items").count()
    console.log('clicked=='+listofitems)

    

})