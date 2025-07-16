
class Arithmetic1{

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
const obj1=new Arithmetic1()
obj1.addition()
obj1.subtraction(10,5)