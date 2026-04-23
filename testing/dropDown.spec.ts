//class10 - dropdown,11

/*Dropdown: It contains multiple elements eg: country
dropdowns are 2 types
    1. static dropdown - The values will never change
        a. Single select dropdown
        b. Multi select dropdown
    2. dynamic dropdown - The value can change at any point of time
        a. Single select dropdown
        b. Multi select dropdown

There will be diff in development dropdowns like some will have below differences
        1. <select> tag - most of the dropdowns will be developed by this tag
        2. non <select> tag

1. Dropdown developed using <select> tag
    stepbystep procedure to select the value
    a. launch the url
    b. locate the dropdoen element by writing the locato
    c. get the value from the dropdown by using the method that playwright has given is selectOption("value attribute" or {label or value or index})
    d. if the dropdown is multiselect - selectOption([value1, value2,value3]) or selectOption(["AS", {label:"India"}, {index:24}])
       eg: page.locator("#add").selectOption("AS" or {label: "india"} or {index: 3})
    
    
2. Dropdown developed using non <select> tag
    stepbystep procedure to select the value
    a. launch the url
    b. locate the dropdoen element by writing the locato
    c. click on the dropdown element identified in step2
    d. identify and click on the element that u want to select from the dropdown   
    
    
    
       */


import{test, expect} from '@playwright/test'

test("dropdown developed using select tag handling", async({page}) =>{

    //single select dropdown
    await page.goto("https://practice.expandtesting.com/dropdown")
    //index starts with zero, label is text value of the element, value attribute is present and use value of value att
    const selectdd = await page.locator("#country")
    await selectdd.selectOption("AX")
    await selectdd.selectOption(["AL","DZ"])
    await selectdd.selectOption({label: "Angola"})
    await selectdd.selectOption({index: 1})
    await selectdd.selectOption({value: "AW"})

    //multi-select dropdown
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["volvo", "volvo"])
    await page.waitForTimeout(8000)
    await page.locator("#cars").selectOption([{label: "Saab"}, {index: 3}])
    await page.waitForTimeout(8000)
})

test("dropdown developed using NON select tag handling", async({page}) =>{

    await page.goto("https://demoqa.com/select-menu")
    //as soon as we click on dropdown element and inspect so the elements dropdown is disappearing so
    //right click inspect->elements->styles->.hov->click on chechkbox of emulate a focused page
    await page.locator("#withOptGroup").click()
    await page.locator("#react-select-2-option-2").click()
    await page.waitForTimeout(8000)
    
    await page.locator("div.css-13cymwt-control").last().click()
    
    await page.locator("#react-select-4-option-0").click()
    await page.locator("#react-select-4-option-3").click()


})