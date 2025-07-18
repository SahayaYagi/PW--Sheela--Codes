import { get } from 'http';
import { Page } from 'playwright'

export class Registerpageorg{
    private page: Page;


private username: string = "//input[@name='username']";

 private password: string = "//input[@type='password']";

private login : string ="//button[@type='submit']";


    constructor(page: Page) {
        this.page = page

    }

   

 async enterusername(username: string) {

        await this.page.fill(this.username,username)
    }
 
 async enterpassword(password: string) {

        await this.page.fill(this.password,password)
 }

 

 
  async clicklogin (){

      await this.page.click(this.login)
  }


   
}






