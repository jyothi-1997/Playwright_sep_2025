//parent file

import { Locator, Page } from "@playwright/test"

export class LKMLoginPage{

    page : Page      //page is variable , Page is datatype
    Uname : Locator //locator is a datatype
    Pwd : Locator 
    Loginbtn : Locator
    homepageidentifier : Locator
    errmsg : Locator

    //Initialised the locators inside constructor
    constructor(pagefixture : Page){   //pagefixture value is initialized here

        this.page = pagefixture     //this.page is called from line5 page variable, pagefixture is value
        this.Uname = this.page.getByPlaceholder("Username")
        this.Pwd = this.page.locator("#password")
        this.Loginbtn = this.page.locator("input[value='Login']")
        this.homepageidentifier = this.page.getByText('Home', { exact: true })
        this.errmsg = this.page.getByText("Username or Password is wrong here!!!")

    }

    //launchurl
    async launchlkmurl(url : string){
        await this.page.goto(url)
}

    /*2. loginIntoApplication()
        --fill the username
        --fill the password
        --click on the login button
    */

    async loginIntolkmapplication(username : string, password : string){
        await this.Uname.fill(username)
        await this.Pwd.fill(password)
        await this.Loginbtn.click()
        }

    async LKMInvalidlogin(username : string, Incorrectpassword : string){
        await this.Uname.fill(username)
        await this.Pwd.fill(Incorrectpassword)
        await this.Loginbtn.click()
    }


}