import { Parent } from "./P.ts"; 


class Child extends Parent{


    phone(){
        super.phone();  // *i phone 15.
        console.log('I phone 16');
        
    }

}

let c = new Child();
c.phone();