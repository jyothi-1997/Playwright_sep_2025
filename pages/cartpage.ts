import { Locator, Page } from "@playwright/test";

export class cartpage{
    productNames(productNames: any) {
        throw new Error('Method not implemented.');
    }


    page: Page;
    cartbutton : Locator
    listofitems : Locator
    productTitles : Locator
    

    constructor(page: Page){

    this.page = page;
    this.cartbutton = this.page.locator("button[routerlink='/dashboard/cart']");
    this.listofitems = this.page.locator("li.items") //2
    this.productTitles = this.page.getByText('ZARA COAT 3', { exact: true })

    }

    async validatecartproduct(productName : string){
        const click = await this.cartbutton.click() //clicks on cart button of dashboard page
        console.log('clicked==='+click)
        
        const totalcount = await this.listofitems.count() //2
        console.log('totoalcount==='+totalcount)
        
        for(let i=0; i<totalcount; i++){
                const cartproducttext = await this.listofitems.nth(i).textContent() 
                console.log('cartproducttext==='+cartproducttext)
            if(cartproducttext== productName){
                const result = await this.listofitems.locator('button').filter({ hasText: 'Buy Now' }).first().click()
                console.log('cartresult'+result) 
                break;

            }


        }


    }
    


}