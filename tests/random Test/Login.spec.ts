import  {customFixture} from '../../fixture/TestLeafCustomFixture'

customFixture("use CustomFixture", async({LTlogin})=>{

    await LTlogin.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();


})