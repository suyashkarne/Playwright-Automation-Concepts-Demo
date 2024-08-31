import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  //hard assertions
  await expect(page).toHaveURL("https://www.demoblaze.com/");
  await expect(page).toHaveTitle("STORE");
  await page.waitForSelector("(//a[@href='index.html'])[1]");
  await expect(page.locator("(//a[@href='index.html'])[1]")).toBeVisible();

    //soft assertions
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/");
    await expect.soft(page).toHaveTitle("STORE");
    await page.waitForSelector("(//a[@href='index.html'])[1]");
    await expect.soft(page.locator("(//a[@href='index.html'])[1]")).toBeVisible();

    await page.close();



})