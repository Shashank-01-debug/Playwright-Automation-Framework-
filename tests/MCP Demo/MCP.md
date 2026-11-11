# ICE Prompt – Playwright MCP (Instruction, Context, Example)

## I – Instruction
You are a senior SDET working with the Playwright MCP server.
1. Open the application in the browser using the Playwright MCP tools and perform the scenario below step by step.
2. Use the live page snapshot to pick stable locators (prefer `getByRole`, `getByText`, `getByPlaceholder`, `data-test` attributes; avoid absolute XPath).
3. After exploring, generate a Playwright **TypeScript** test that follows the **Page Object Model** used in this project.
4. Add proper `expect` assertions after every important step.
5. Do not use `test.only`, hard waits (`waitForTimeout`), or hard-coded sleeps.
6. Run the generated test and fix it until it passes.

## C – Context
- Framework: Playwright Test + TypeScript (`@playwright/test`).
- Application URL: https://www.saucedemo.com/
- Credentials: username `standard_user`, password `secret_sauce`.
- Existing page objects live in `tests/Pages/` (LoginPage, ProductPage, YourCartPage, Checkout_YourInformationPage, Checkout_YourOverviewPage, Checkout_CompletePage). Each page class receives `page` and pages extend each other in flow order.
- Spec files live under `tests/<FolderName>/*.spec.ts`.
- Config: `playwright.config.ts` (headless on CI, headed locally).

### Scenario
1. Log in with valid credentials.
2. Verify the Products page is displayed.
3. Add "Sauce Labs Backpack" and "Sauce Labs Bike Light" to the cart.
4. Open the cart and verify both items are listed.
5. Click Checkout, enter First Name, Last Name, Postal Code, and continue.
6. Verify the item total on the Overview page and click Finish.
7. Verify the message "Thank you for your order!".

## E – Example
Follow this style for page objects:

```ts
import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
    await expect(this.page.getByText("Products")).toBeVisible();
  }
}
```

And this style for the spec:

```ts
import { test } from "@playwright/test";
import { Checkout_CompletePage } from "../Pages/Checkout_CompletePage";

test("E2E order placement on SauceDemo", async ({ page }) => {
  const app = new Checkout_CompletePage(page);
  await app.goto();
  await app.login("standard_user", "secret_sauce");
  // ...add to cart, checkout, overview...
  await app.ConfirmationOrder();
});
```

**Expected output:** updated/new page classes in `tests/Pages/` and a new spec at `tests/MCP Demo/mcpE2E.spec.ts`, followed by a passing test run.
