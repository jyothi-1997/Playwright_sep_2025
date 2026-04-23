//class12

/*Assertions are of 2 types: 5seconds will be default time for assertions
    1. Auto retrying assertion: 
            await expect(locator).toBeChecked()
            await expect(locator).toBeHidden()
            await expect(locator).toBeVisible()
            await expect(locator).toContainText()
            await expect(locator).toHaveText()
            await expect(locator).toHaveValue()
            await expect(locator).toHaveValues()
            await expect(page).toHaveTitle()
            await expect(page).toHaveURL()
            await expect(response).toBeOK()

    2. Non retrying assertion

*/

/*Hard Assertion:
        If an assertion fails, the testcase will be marked as failed and further
        execution of the test case will be stopped
        eg:
         await expect(newPage.locator("#bindings")).toHaveText("Selenium Clients and WebDriver Language Bindings")
  Soft Assertion: 
        If an assertion fails, the testcase will be marked as failed and further
        execution of the test case will continue
        eg:
         await expect.soft(newPage.locator("#bindings")).toHaveText("Selenium Clients and WebDriver Language Bindings")
  

*/