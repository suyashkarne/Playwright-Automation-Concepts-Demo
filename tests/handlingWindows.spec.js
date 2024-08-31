import { test, expect, chromium } from '@playwright/test';

test('Multiple windows using 2 Page test', async () => {
  
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page1=await context.newPage();
    const page2=await context.newPage();

    console.log("No of pages are:",context.pages().length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    await page2.goto("https://www.orangehrm.com/");
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM");

    await page1.close();
    await page2.close();

})

test('Multiple windows using 1 Page test', async () => {
  
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page1=await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    const pagePromise=context.waitForEvent('page');
    await page1.locator("//a[text()='OrangeHRM, Inc']").click();
    const page2=await pagePromise;
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM");

    await page1.close();
    await page2.close();



})