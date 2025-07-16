
import { Page } from 'playwright'

export class LoginPage {
    private page: Page;

    private emailAddress: string = '#input-email';
    private password: string = '#input-password';
    private loginButton: string = '//input[@type="submit"]';

    constructor(page: Page) {
        this.page = page

    }

    async enterEmailAddress(email: string) {

        await this.page.fill(this.emailAddress, email)
    }

    async enterpassword(password: string) {

        await this.page.fill(this.password, password)
    }
    async clickloginButton() {
        await this.page.click(this.loginButton)

    }

   async validLoginCredentials( username : string ,passowrd : string){

     await this.page.fill(this.emailAddress, username)
          await this.page.fill(this.password, passowrd)
          await this.page.click(this.loginButton)

   }

   
}






