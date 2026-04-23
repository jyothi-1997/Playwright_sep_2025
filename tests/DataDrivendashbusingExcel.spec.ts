import {test, expect} from '@playwright/test'
import { dashBoardPage } from '../pages/dashBoardPage'
import { LoginPage } from '../pages/LoginPage'
import path from 'path'
import { ExcelUtils } from '../utils/ExcelUtils'
import datadrivendashboarddata from '../TestData/Datadriven.json'


const filePath = path.join(__dirname, "../TestData/Datadrivenexcel.xlsx")
const sheetName = 'Login'

let products
try {
   products = ExcelUtils.getExcelData(filePath, sheetName)
 
} catch (error) {
    console.log(error)
}

 let loginpage : LoginPage; //globally declared can be used anywhere in the script
 let dashboardpage : dashBoardPage;

 test.beforeEach(async({page}) =>{
     // let loginpage = new LoginPage(page) --> will not work as "loginpage" is already declared globally not need to declare again.
     loginpage = new LoginPage(page) //page fixture is applicable for beforeEach 
     dashboardpage = new dashBoardPage(page)
    })


for (let element of datadrivendashboarddata){
    //here the title will show error as it is executing for 3 different testcases with 3 diff testdata so 
    // we need to do parameterization for a testcase title means converting test("Add the product to the cart", async()=>{}
    //to test(`Validate product details for ${element.productName}`, async()=>{}
test(`Validate product details for ${element.productName}`, async()=>{
    
    await loginpage.launchUrl(element.url) //url will launch for each test case
    await loginpage.loginIntoApplication(element.username, element.password)
 
    await dashboardpage.searchAndAddProductToCart(element.productName)
    await expect(dashboardpage.addToCartSuccessMsg).toHaveText(element.cartsuccessmessage)
    
})
}


/* Undersatnding of Datadriven.JSON file and test(`Validate product details for ${element.productName}`, async()=>{}

const datadrivendashboarddata = 
[
{
    url : "https://rahulshettyacademy.com/client/#/auth/login",
    username : "Naveen@gmail.com",
    password : "Reddy@36",
    productName : "ZARA COAT 3",
    cartsuccessmessage : "Product Added To Cart",
    productprice : "$ 11500"
},
{
    url : "https://rahulshettyacademy.com/client/#/auth/login",
    username : "Naveen@gmail.com",
    password : "Reddy@36",
    productName : "ADIDAS ORIGINAL",
    cartsuccessmessage : "Product Added To Cart",
    productprice : "$ 11500"
},
{
    url : "https://rahulshettyacademy.com/client/#/auth/login",
    username : "Naveen@gmail.com",
    password : "Reddy@36",
    productName : "iphone 13 pro",
    cartsuccessmessage : "Product Added To Cart",
    productprice : "$ 55000"
}
]

console.log(array[0].productName) // It prints 1st block of code having productname

for(let element of datadrivendashboarddata){ //here let element is an variable 
    console.log(element.productName) //element will go into each and every block of array and will print all the productNames
}

*/