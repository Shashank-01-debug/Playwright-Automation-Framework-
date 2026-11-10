import { test as CF, Page } from '@playwright/test'

export const customFixture = CF.extend<{ LTlogin: Page }>({

    LTlogin: async ({ page }, use) => {

        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder("Username").fill("standard_user");
        await page.getByPlaceholder("Password").fill("secret_sauce");
       await page.getByRole('button',{name:'Login'}).click();

        await use(page)

    }
})
