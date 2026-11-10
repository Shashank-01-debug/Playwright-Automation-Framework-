class LoginPage{
//property
     label:string ='username'
     label1:string ='password'
     admin:any;

    //Method
    fill(){

        console.log("fill");
        
    }

    clear(){
        console.log("clear");
        
    }

    //? can't create object inside the class
   // let obj = new LoginPage()

    //constructor(){
    //console.log("Default Constructor");
    //}


//! we can't create both default and parameterized constructor at same time inside the class.
//this keyword refers to current property and helps to differentiate b/w current property and local parameter.
   constructor(admin:string){
   this.admin=admin;
   console.log(admin);
   
   }


}

let obj = new LoginPage("shashank");
obj.fill();
console.log(obj.label);
console.log(obj.admin);

