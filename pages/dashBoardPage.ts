//class 20
//locator and methods related to dashboard page only
//Parent file

/*Testcase
1. validate the product is added to cart and validate whether it is added or no
2. click on view button whether product name is displayed or no


*/


import{Locator, Page} from '@playwright/test'

export class dashBoardPage{

    page : Page
    products : Locator
    addToCartSuccessMsg : Locator
    viewProductName: Locator
    viewProductPrice : Locator
   
    


    constructor(page : Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccessMsg = this.page.locator("#toast-container")
        this.viewProductName = this.page.locator("div.rtl-text h2")
        this.viewProductPrice = this.page.locator("div.rtl-text h3")
       

    }

    async searchAndAddProductToCart(productNames: string){
         //auto-wait concept is not applicable for multiple matching element on dom so we can write this line of code to wait
        await this.products.last().waitFor() //It will make sure to wait for certain element based on search eg: 3 elements are present on page so for third element it will wait and execute the line


        //count() - returns the total number of matching elements
        const countOfProducts = await this.products.count() //total 3 are available
        console.log('dashboardcount'+countOfProducts)

        for(let i=0; i<countOfProducts; i++){ //i is variable
                //products.nth(i) - nth(0) means first product, products.nth(1) means second product
                const productText = await this.products.nth(i).locator("b").textContent()
                console.log('dashboardtext'+productText)
                
                //if(productText === productNames){
                if (productText && productNames.includes(productText.trim())) { //If product name exists AND if it is present in my list of required products, then click Add to Cart 
                    
                    //locator("div.card-body button") has 6 matching element so goto last(viewcart) and click on it
                    const result = await this.products.nth(i).locator("button").last().click() //locator("button") is called as locator chaining as we are extending with products locator
                    await this.addToCartSuccessMsg.waitFor()
                    console.log('dashboardresult'+result)
                    
                }
        }
   
    }

    async searchAndAddProductDetails(productNames : string){
         //auto-wait concept is not applicable for multiple matching element on dom so we can write this line of code to wait
        await this.products.last().waitFor() //It will make sure to wait for certain element based on search eg: 3 elements are present on page so for third element it will wait and execute the line
         

        //count() - returns the total number of matching elements
        const countOfProducts = await this.products.count() //total 3 are available
        console.log('dashboardcount'+countOfProducts)

        for(let i=0; i<countOfProducts; i++){ //i is variable
                const productText = await this.products.nth(i).locator("b").textContent()
                console.log('dashboardtext'+productText)
                //if(productText === productName){
                if (productText && productNames.includes(productText.trim())) {
                    const result = await this.products.nth(i).locator("button").first().click()
                    console.log('dashboardresult'+result) 
                    
                }

        }
   
    }
}

