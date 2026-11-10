import { defineConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */

/* Shared browser settings: visible (headed), maximized Edge, slowed down so you can watch each step */
/* On CI (Azure DevOps / GitHub Actions) there is no screen: run headless, full speed, fixed viewport */
const isCI = !!process.env.CI;

const headedEdge = {
  channel: 'msedge',
  headless: isCI,
  viewport: isCI ? { width: 1920, height: 1080 } : null,
  launchOptions: {
    args: isCI ? [] : ['--start-maximized'],
    slowMo: isCI ? 0 : 500, // ms pause between actions; set to 0 for full speed
  },
};

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* One worker locally so only one browser window opens at a time */
  workers: process.env.CI ? 2 : 1,
  /* Per-test timeout (raised because slowMo makes tests take longer) */
  timeout: 60_000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: isCI
    ? [['html', { open: 'never' }], ['junit', { outputFile: 'test-results/junit.xml' }], ['list']]
    : [['html', { open: 'always' }]],
  /* Shared settings for all the projects below. */
  use: {
    headless: isCI,
    trace: isCI ? 'on-first-retry' : 'on',
    screenshot: isCI ? 'only-on-failure' : 'on',
    video: isCI ? 'retain-on-failure' : 'on',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: { ...headedEdge },
    },
    {
      // only the storage state tests need the login setup to run first
      name: 'storage-state',
      testDir: './tests/storageState',
      testIgnore: /.*\.setup\.ts/,
      dependencies: ['setup'],
      use: { ...headedEdge },
    },
    {
      // all other tests run without login setup
      name: 'edge',
      testIgnore: /storageState[\\/]/,
      use: { ...headedEdge },
    },
  ],
});
