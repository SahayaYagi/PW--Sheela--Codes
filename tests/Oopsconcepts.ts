
class Arithmetic{

    addition (){
        let a=10
        let b=20
        let c=a+b
        //console.log(c);
        console.log("addition of 2 numbers"+c);
        
    }
  subtraction(a:number,b:number){
    //let a=40
    //let b =20
    let c=a-b
    console.log("subtraction of 2 numbers"+c);
    

  }

}
const obj=new Arithmetic()
obj.addition()
obj.subtraction(10,5)