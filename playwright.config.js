
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  use: {
    headless: true,
    actionTimeout: 0,
    // screenshot: 'only-on-failure',
    // video: 'retain-on-failure',
  },
  reporter: [['list'], ['html', { open: 'never' }]],
};

module.exports = config;
