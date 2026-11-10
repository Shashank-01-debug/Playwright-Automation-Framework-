//!all the reusable methods in playwright framework is used by abstract class.

abstract class wrapperMethod{
    //contains both implement and unimplement methods
    //!i.e. 0-100 % abstraction

    fill(locator:string, value:string):void{

        console.log(locator, value);
        console.log("fill using locator and value.");
        //await page.locator(locator).fill(value);
    }

     //call this method using 
    //fill('#username',"demoCsr");


   //* abstract method which we can use in future according to our needs.
    abstract fileDownload():void

}


//let  a = new wrapperMethod();
//! we can't create object of abstract class.

//* To connect abstract class to normal class we use keyword extends.

class Impl extends wrapperMethod{

    fileDownload(): void {
        console.log('File downloaded');
        
    }

}

let imp = new Impl();
imp.fill("css","demo");
