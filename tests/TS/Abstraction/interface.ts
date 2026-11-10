interface browserMethod{

//100% abstract method
browserName():void
browserVersion():void

}

interface a{

    add():void

}


interface b extends a,browserMethod{
    multiplication():void
}

//* to connect interface to interface we have to use keyword extends.
//! can't create object of interface.

class implementBrowser implements b{

    multiplication(): void {
        throw new Error("multiplying.");
    }
    add(): void {
        throw new Error("adding.");
    }

    browserName(): void {
        console.log('chrome');     
    }

    browserVersion(): void {
       console.log('13.91');    
    }

}

let imp = new implementBrowser();
imp.browserName();
imp.browserVersion();