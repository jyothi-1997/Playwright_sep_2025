//class 15

/* shadow dom elements cannot be located or accessed using xpath
    shadow dom elements can be located only by using css selector or playwright specific methods
    How to identify shadow elements in DOM: using #shadow-root

    Note: Playwright has built-in support for shadow DOM. you can directly access elements inside the 
          shadow roots without having any special handling.
          To access the shadow element we have to use either playwright built-in locator or css selector.
          XPath will not be able find shadow dom element.
*/

import{test, expect} from '@playwright/test'

test('Shadow DOM handling', async ({ page }) => {
   
    await page.goto('https://books-pwakit.appspot.com/');
    await page.locator("#input").fill("Testing")
    await page.locator("div.icon").click()
    await expect(page.locator("#input")).toHaveValue("Testing")

})