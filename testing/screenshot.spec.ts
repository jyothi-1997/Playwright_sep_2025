//class15

/*Playwright by default supports screenshot capture functionality

3 ways we can capture screenshot
1. capture the screenshot for displayed page
2. capture the screenshot for specific element
3. capture.screenshot of entire page(start to end of page by scrolling down)
*/

import{test, expect} from '@playwright/test'
import path from 'node:path'

test('screenshot handling', async ({ page }) => {

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    //capture screenshot of displayed page
    await page.screenshot({path: 'screenshots/Page.png'}) //screenshots is a folder(if folder is not available it will create and store it), page is a file 

    //capture the screenshot for specific element
    await page.locator("#first_date_picker").screenshot({path: 'screenshots/Element.png'})

    //capture.screenshot of entire page
    await page.screenshot({path: 'screenshots/fullPage.png', fullPage:true})
})