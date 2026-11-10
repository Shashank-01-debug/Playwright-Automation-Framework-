class BaseClass{

    //Declaration of Method
    ElementClick(locator:string):void
    ElementClick(locator:string,forceClick:boolean):void

    //we need to use optional here to use method overloading
    ElementClick(locator:string,forceClick?:boolean):void{

        if(forceClick === true){
            console.log('force Click --> '+locator);
            
        }
        else{
            console.log('normal Click --> '+locator);
            
        }

    }
    


}

let bc = new BaseClass();
bc.ElementClick("xpath");