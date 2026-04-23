//class13

/* Codegen\playwright inspector tool: built-in tool in playwright
    -->which help us in generating testscript by recording the actions performed on the browser
    -->>By default the code is generated in 'Typescript' language and it can be converted into multiple languages
        like Python, .net, java

    How to open the codegen tool:
        Terminal command: npx playwright codegen <website url>
        eg: npx playwright codegen <https://demo.automationtesting.in/Windows.html>

    Playwright Inspector Toll: Record and palyback tool which will automatically record the actions which u perform
                                whatever the code it generates it has success rate of 99%
    Pick locator:    For any element it will generate unique locator
    Assert Visibilty(eye symbol): TobeVisible() is similar o Assert visibility and we can validate using tobeVisible() here
    Assert text:  tocontaintext() method is similar to assert text and it works in contains manner
    Assert Value: toHavevalue() will assert the value for input field or text field
    Screenshot validation: which captures screenshot in visible testing means the page is developer earlier is same as after deployment so it validates 
                           look and feel of the application using screenshot is called as 'Visible testing'
    TestRunner: By default the code is generated in 'Typescript' language and it can be converted into multiple languages
                like Python, .net, java

*/ 




import { test, expect } from '@playwright/test';

test('Multiple windows test using codegen', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.getByRole('link', { name: 'Open New Seperate Windows' }).click();
 
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('WebDriver Language Bindings');

  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('textbox', { name: 'Email id for Sign Up' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});

/*Frames:
    Contentframe(): It identifies that u r inside a frame locator or element

*/


test('Frames handling using codegen', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.getByRole('link', { name: 'Frames' }).click();
  await page.getByRole('link', { name: 'Single Iframe' }).click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').press('CapsLock');
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('T');
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').press('CapsLock');
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('Testing');
  await expect(page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox')).toHaveValue('Testing');
  await expect(page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox')).toHaveValue('Testing');
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').press('CapsLock');
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').fill('T');
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').press('CapsLock');
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').fill('Testing');
  await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox')).toHaveValue('Testing');
});

