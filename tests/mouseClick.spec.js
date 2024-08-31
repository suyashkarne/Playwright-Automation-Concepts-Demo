const exp = require("constants");
import { test, expect } from '@playwright/test';


test("RightClick",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button=await page.locator("//span[text()='right click me']");

    await button.click({button:"right"});

    await page.waitForTimeout(3000);

    await page.close();


})

test("DoubleClick",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const button=await page.locator("//button[text()='Copy Text']");

    await button.dblclick();

    const field2=page.locator("//input[@id='field2']");

    await expect(field2).toHaveValue("Hello World!");

    await page.waitForTimeout(3000);


  await page.close();

})