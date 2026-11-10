import { Browser } from "./Browser.ts";

class Chrome extends Browser{

    launchBrowser(){
        console.log('launching Chrome');
        
    }

}

let chrome = new Chrome();
chrome.browserType();
chrome.browserVersion();
chrome.launchBrowser();