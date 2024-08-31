import { test, expect } from '@playwright/test';


test("Filling input fields test",async({page})=>{
    await page.goto("https://www.demoblaze.com/");

    page.locator("//a[text()='Log in']").click();
    // await page.click("//a[text()='Log in']");

    // await page.locator("//input[@id='loginusername']").fill("pavanol");
    await page.fill("//input[@id='loginusername']","pavanol");
    // await page.type("//input[@id='loginusername']","pavanol");

    // await page.locator("//input[@id='loginpassword']").fill("test@123");
    await page.fill("//input[@id='loginpassword']","test@123");
    // await page.type("//input[@id='loginpassword']","test@123");

    page.locator("//button[text()='Log in']").click();
    // await page.click("//button[text()='Log in']");


    await page.waitForSelector("//a[text()='Log out']");
    const logout=await page.locator("//a[text()='Log out']");
    await expect(logout).toBeVisible();

    await page.close();
})