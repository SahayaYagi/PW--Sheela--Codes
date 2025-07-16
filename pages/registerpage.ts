import { get } from 'http';
import { Page } from 'playwright'

export class Registerpage{
    private page: Page;

private continuebutton: string = "//a[text()='Continue']";
    private firstname: string = '#input-firstname';
    private lastname: string = "#input-lastname";
private emailAddress: string = '#input-email';
private telePhone: string = "//label[@for='input-telephone']";
 private password: string = '#input-password';
private cnfpassword: string = '#input-confirm';
private buttononclick :  string = "//input[@type='checkbox']";
private submit : string ="//input[@type='submit']";



    constructor(page: Page) {
        this.page = page

    }

    async clicktheContinuebutton(){

         await this.page.click(this.continuebutton)
    }

    async enterfirstname(firstname: string) {

        await this.page.fill(this.firstname, firstname)
    }
    
 async enterlastname(lastname: string) {

        await this.page.fill(this.lastname, lastname)
    }

 async enteremailaddress(emailAddress: string) {

        await this.page.fill(this.emailAddress,emailAddress)
    }
 async enterphno(telePhone: string) {

        await this.page.fill(this.telePhone,telePhone)
 }
 async enterpassword(password: string) {

        await this.page.fill(this.password,password)
 }

 async enterconfirmpassword(cnfpassword: string) {

        await this.page.fill(this.cnfpassword,cnfpassword)
 }

  async clickcheckbox(){

         await this.page.click(this.buttononclick)
  }

  async clicksubmit1 (){

      await this.page.click(this.submit)
  }


//    async validLoginCredentials( username : string ,passowrd : string){

//      await this.page.fill(this.emailAddress, username)
//           await this.page.fill(this.password, passowrd)
//           await this.page.click(this.loginButton)

   //}

   
}






