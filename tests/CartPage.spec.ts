import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { dashBoardPage } from '../pages/dashBoardPage';
import { cartpage } from '../pages/cartpage';


 const url = "https://rahulshettyacademy.com/client/#/auth/login"
 const username = "Naveen@gmail.com"
 const password = "Reddy@36"
 const productNames = ["iphone 13 pro", "ZARA COAT 3"]
 const productName = "ZARA COAT 3" 
 

 let loginpage : LoginPage; //globally declared can be used anywhere in the script
 let dashboardpage : dashBoardPage;
 let cart : cartpage;

 test.beforeEach(async({page}) =>{
     // let loginpage = new LoginPage(page) --> will not work as "loginpage" is already declared globally not need to declare again.
     loginpage = new LoginPage(page) //page fixture is applicable for beforeEach 
     dashboardpage = new dashBoardPage(page)
     cart = new cartpage(page)
     await loginpage.launchUrl(url) //url will launch for each test case
     await loginpage.loginIntoApplication(username, password)
     await dashboardpage.searchAndAddProductToCart(productNames)
 })

 test("Validate cart page", async()=>{

    await cart.validatecartproduct(productName)
    const comp = await expect(cart.productTitles).toContainText(productName) //compares the producttitles
    console.log('compare' + comp) // It gives undefines as it expect stores nothing just for debugging we wrote

 })