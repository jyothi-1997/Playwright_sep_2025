import {test, expect} from '@playwright/test'
import { dashBoardPage } from '../pages/dashBoardPage'
import { LoginPage } from '../pages/LoginPage'

import dashboarddata from '../TestData/Dashboardpage.json'
console.log(dashboarddata)

 let loginpage : LoginPage; //globally declared can be used anywhere in the script
 let dashboardpage : dashBoardPage;

 test.beforeEach(async({page}) =>{
     // let loginpage = new LoginPage(page) --> will not work as "loginpage" is already declared globally not need to declare again.
     loginpage = new LoginPage(page) //page fixture is applicable for beforeEach 
     dashboardpage = new dashBoardPage(page)
     await loginpage.launchUrl(dashboarddata.url) //url will launch for each test case
     await loginpage.loginIntoApplication(dashboarddata.username, dashboarddata.password)
 })



test("Add the product to the cart", async({page})=>{
    
    await dashboardpage.searchAndAddProductToCart(dashboarddata.productName)
    await expect(dashboardpage.addToCartSuccessMsg).toHaveText(dashboarddata.cartsuccessmessage)
    
})

test("Validate the product details", async({page}) =>{

    await dashboardpage.searchAndAddProductDetails(dashboarddata.productName)
    await expect(dashboardpage.viewProductName).toHaveText(dashboarddata.productName)
    await expect(dashboardpage.viewProductPrice).toHaveText(dashboarddata.productprice)

})



/*errors: 
    Property 'prototype' is missing in type 'dashBoardPage' but required in type 'typeof dashBoardPage'.
    ans:
    It will occur when u mismatch (:) with (=)
    eg: i have declared dashboardpage globally with "=" symbol like "let dashboardpage =  dashBoardPage;"
    when u call inside beforeeach as "dashboardpage = new dashBoardPage(page)" it will throw error
    so u should decare globale variable with (:) symbol "let dashboardpage :  dashBoardPage;"
*/