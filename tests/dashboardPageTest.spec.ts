import {test, expect} from '@playwright/test'
import { dashBoardPage } from '../pages/dashBoardPage'
import { LoginPage } from '../pages/LoginPage'

 const url = "https://rahulshettyacademy.com/client/#/auth/login"
 const username = "Naveen@gmail.com"
 const password = "Reddy@36"
 const productNames = ["iphone 13 pro", "ZARA COAT 3"]
 const cartsuccessmessage = "Product Added To Cart"
 const productprice = "$ 55000"

 let loginpage : LoginPage; //globally declared can be used anywhere in the script
 let dashboardpage : dashBoardPage;

 test.beforeEach(async({page}) =>{
     // let loginpage = new LoginPage(page) --> will not work as "loginpage" is already declared globally not need to declare again.
     loginpage = new LoginPage(page) //page fixture is applicable for beforeEach 
     dashboardpage = new dashBoardPage(page)
     await loginpage.launchUrl(url) //url will launch for each test case
     await loginpage.loginIntoApplication(username, password)
 })



test("Add the product to the cart", async({page})=>{
    
    await dashboardpage.searchAndAddProductToCart(productNames)
    await expect(dashboardpage.addToCartSuccessMsg).toHaveText(cartsuccessmessage)
    
})

test("Validate the product details", async({page}) =>{

    await dashboardpage.searchAndAddProductDetails(productNames)
    await expect(dashboardpage.viewProductName).toHaveText(productNames)
    await expect(dashboardpage.viewProductPrice).toHaveText(productprice)

})



/*errors: 
    Property 'prototype' is missing in type 'dashBoardPage' but required in type 'typeof dashBoardPage'.
    ans:
    It will occur when u mismatch (:) with (=)
    eg: i have declared dashboardpage globally with "=" symbol like "let dashboardpage =  dashBoardPage;"
    when u call inside beforeeach as "dashboardpage = new dashBoardPage(page)" it will throw error
    so u should decare globale variable with (:) symbol "let dashboardpage :  dashBoardPage;"
*/