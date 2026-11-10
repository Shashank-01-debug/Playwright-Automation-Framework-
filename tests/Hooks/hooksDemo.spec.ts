import {test,expect} from '@playwright/test'

//fullyParallel:true in config spreads these tests across workers, so logs get mixed up
//'default' mode runs the tests of this file one after another, in order
test.describe.configure({mode:'default'})

test.beforeAll("Before All hook Demonstration", async ()=>{

   console.log('Before all got executed');

})

test.afterAll("After All hook Demonstration", async ()=>{

   console.log('After all got executed');

})



test.beforeEach('Before each hook demonstration',async()=>{

    console.log('beforeEach got executed');
    

})

test.afterEach('After each hook demonstration',async()=>{

    console.log('afterEach got executed');
    

})

test('test practice 1', async ({page})=>{

   console.log('start of practice test 1');
   await page.goto('https://tutorialsninja.com/demo/');
   console.log(await page.title());
   console.log('end of Practice test 1');

})

test('test practice 2', async ({page})=>{

   console.log('start of practice test 2');
   await page.goto('https://tutorialsninja.com/demo/');
   console.log(await page.title());
   console.log('end of Practice test 2');

})

test('test practice 3', async ({page})=>{

   console.log('start of practice test 3');
   await page.goto('https://tutorialsninja.com/demo/');
   console.log(await page.title());
   console.log('end of Practice test 3');

})

test('test practice 4', async ({page})=>{

   console.log('start of practice test 4');
   await page.goto('https://tutorialsninja.com/demo/');
   console.log(await page.title());
   console.log('end of Practice test 4');

})


