import BasePage from "./BasePage";

export default class LoginPage extends BasePage{
    constructor(){
        super()
        this.navBar="//div@class='menu-wrapper'"
        this.inputEmail = "input[placeholder='Email']"
        this.inputPassword = "input[placeholder='Password']"
        this.submitButton = '(//button[1][@type="submit"])[1]'
        this.loginPageText = "//h2[contains(text(), 'Hi,')]"
    }

    async visit(){
        await page.goto('https://phptravels.net/login')
        await page.waitForXpath(this.navBar)
        const url = this.getUrl()
        console.log(url)
    }

    async login(email,password){
        await page.waitForSelector(this.inputEmail)
        await this.type(this.inputEmail, email)
        await this.type(this.password, password)
        await this.click(this.submitButton)
    }

    async validateLogin(){
        await page.waitForXpath(this.loginPageText)
        await page.waitForXpath(this.navBar) 
    }



}