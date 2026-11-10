import {test,expect} from '@playwright/test'

test('hover on element', async ({page})=>{

    await page.goto('https://tutorialsninja.com/demo/');
    await page.locator("(//a[@class='dropdown-toggle'])[2]").hover();
})

test('hover on element and left click', async ({page})=>{

    await page.goto('https://tutorialsninja.com/demo/');
    await page.locator("(//a[@class='dropdown-toggle'])[2]").hover();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Show AllDesktops' }).click();


})

test('mouse right click', async ({page})=>{

    await page.goto('https://tutorialsninja.com/demo/');
    await page.getByPlaceholder("Search").click({button:"right"});


})

test('mouse double click', async ({page})=>{

    await page.goto('http://omayo.blogspot.com/');
    await page.locator("//p[@id='testdoubleclick']").dblclick();


})


test.only('Drag and drop Demo', async ({page})=>{

    await page.goto('https://jqueryui.com/droppable/');
    const frame_1 =await page.frameLocator("//iframe[@class='demo-frame']")
    const dragElement = frame_1.locator("//div[@id='draggable']")
    const dropElement = frame_1.locator("//div[@id='droppable']");
    await dragElement.dragTo(dropElement);



})
