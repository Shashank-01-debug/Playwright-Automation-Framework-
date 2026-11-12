import { Page, Locator, expect } from '@playwright/test'

export class BasePage {

    //!global Variable and also it is userdefine
    page: Page

    //?to reuse the page reference to all page
    constructor(page: Page) {
        this.page = page
    }

    //* ---------- Navigation ----------

    async loadUrl(url: string) {
        await this.page.goto(url);
    }

    //* ---------- Actions ----------

    async type(locator: Locator, text: string) {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(text);
    }

    async click(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async getText(locator: Locator): Promise<string> {
        await locator.waitFor({ state: 'visible' });
        return (await locator.textContent())?.trim() ?? '';
    }

    //* ---------- Assertions ----------

    async verifyText(locator: Locator, expectedText: string) {
        await expect(locator).toHaveText(expectedText);
    }

    async verifyContainsText(locator: Locator, expectedText: string) {
        await expect(locator).toContainText(expectedText);
    }

    async verifyVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async verifyUrl(expectedUrl: string | RegExp) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async verifyTitle(expectedTitle: string | RegExp) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

}
