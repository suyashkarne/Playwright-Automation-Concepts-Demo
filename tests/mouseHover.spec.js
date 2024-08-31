import { test, expect } from '@playwright/test';


test("Mouse hover test",async({page})=>{
    await page.goto("https://demo.opencart.com/");

    const desktops=await page.locator("//*[text()='Desktops']");
    const macobook=await page.locator("//*[text()='Mac (1)']");

    await desktops.hover();
    await macobook.hover();

    await page.waitForTimeout(3000);

    await page.close();

})