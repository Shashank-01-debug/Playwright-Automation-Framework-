import { Browser } from "./Browser.ts";

class Edge extends Browser{


    launchBrowser(){
        console.log('Launching edge Browser');
        
    }




}

let edge = new Edge();

edge.browserType();
edge.browserVersion();
edge.launchBrowser();