//class 15
/* calendar is also a Table
   Table consists of rows and columns

*/

import{test, expect} from '@playwright/test'

test("Calendar handlings", async({page}) =>{


    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

   const targetDay = "5" 
   const targetmonth = "May"
   const targetyear = "2027"

   const monthpicker = page.locator(".ui-datepicker-month")
   const yearpicker = page.locator(".ui-datepicker-year")
   const nxtbtn = page.getByText("Next")

   while(true){ //true resembles until condition is true it will run the loop

    if((await monthpicker.textContent() === targetmonth) && (await yearpicker.textContent() === targetyear)){
        await page.getByText(targetDay, {exact: true}).click()
        break

    }

        await nxtbtn.click()

   }

})