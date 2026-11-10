export class Browser{

    url:string="https://www.google.com/";
    username:string="shashank";
    companyName:any


    constructor(companyName:string){

        this.companyName=companyName;
        console.log(companyName);
        
    }


}

let object = new Browser("Google");
