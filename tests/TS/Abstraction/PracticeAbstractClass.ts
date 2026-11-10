abstract class reusableMethods{

fill(locator:string,value:string){
    console.log(locator,value);
    
}

clear(){
    console.log('clear the screen');
    
}

locator(locator:string){

    console.log(`found the locator`);
    console.log(locator);
    
}

abstract frame():void


}

class impo extends reusableMethods{

    frame(): void {
        console.log('Handling the frames');
    }


    
}

let i = new impo();
i.clear();
i.fill("css","demoCSR");
i.frame();
i.locator("Absolute xpath")