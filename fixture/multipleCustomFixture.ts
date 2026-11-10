import {test as baseTest} from '@playwright/test';

type MyFixtures = {
    fixtureA:string
    fixtureB:string
}

export const test=baseTest.extend<MyFixtures>({

    fixtureA: async ({},use)=>{

        const a='I am a fixture A';
        console.log('Before FixtureA');
        await use(a);
        console.log('After FixtureA');

    },

    fixtureB: async ({},use)=>{

        const b="I am a fixture B";
        console.log('Before fixtureB');
        await use(b);
        console.log('After fixtureB');

    }

})
