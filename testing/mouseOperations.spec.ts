//class9

/*Mouse operations:
    click: we can use click() method
    right click: we can use optional parameter(?) like click({button:'right'}) method
    double click: dblclick() method we can use
    scroll down/up/left/right: playwright autoperforms scrolldown up/left/right
                               scrollIntoViewIfNeeded() method we can use if it needed 
    mouse hover: hover() method we can use
    drag and drop: sourcelocator.dragTo(TargetLocator) method will accept only locators

*/

import {test, expect} from '@playwright/test'

test("double click and right click operations", async({page})=>{

        await page.goto("https://www.demo.guru99.com/test/simple_context_menu.html")

        //dblclick() will double click on the element
        //next alert or popup will appear but playwright by default it will handle it and it will right click on right click me    
        await page.getByText("Double-Click Me To See Alert", {exact: true}).dblclick()
        await page.waitForTimeout(2000) //hardwait will wait for 2sec

        //it will righ click on the element
        await page.getByText("right click me").click({button: 'right'})

        //tobevisible() will validate if the element is visible on page or not
        await expect(page.getByText("Delete", {exact: true})).toBeVisible()

})


        /*Note: Playwright auto handles the alert/popup whenever there will be an alerts/popups appears on the page
                that means there is an event gets called known as "dialog"
                popup means dialogue event
                "popup event" refers to new tab/page or new windows

        */


                //class10
        test("Scrolling on the page", async({page})=>{

                await page.goto("https://testautomationpractice.blogspot.com/")
                await page.getByText("Download Files").scrollIntoViewIfNeeded() //it says scroll down if needed
                await page.getByText("Download Files").click()
                await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/download-files_25.html")
                const url = await page.url()
                console.log(url)
        })

        test("Mouse hover on the element", async({page}) =>{

                await page.goto("https://www.spicejet.com/")
                //hover() - hover on an element
                await page.getByText("Travel Policies").hover()
                await page.waitForTimeout(2000)
                //if "data-testid" is present the use getbyTestid
                await expect(page.getByTestId("test-id-Baggage Information")).toBeVisible()
               

        })
        
        test("Drag and drop handling", async({page}) =>{

                await page.goto("https://testautomationpractice.blogspot.com/")

                const sourceelement = await page.locator("div#draggable")
                const targetelement = await page.locator("div#droppable")

                //sourcelocator.dragTo(TargetLocator)
                //await sourceelement.dragTo(targetelement)
                
                //instead of dragto() we can use below 4 methods
                await sourceelement.hover()
                await page.mouse.down()
                await targetelement.hover()
                await page.mouse.up()

                await expect(page.locator("div#droppable p")).toHaveText("Dropped!")

        })



