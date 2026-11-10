import {test as baseTest} from '@playwright/test'

//!fixtureA is the name of the fixture

export const test=baseTest.extend<{fixtureA:string}>({

    fixtureA: async ({},use)=>{
              
        const a ="I am a fixture A"
        console.log('Before part of test Fixture A');
        await use(a);
        console.log('After part of test Fixture A');
        
    }

});