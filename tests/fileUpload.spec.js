import { test, expect } from '@playwright/test';

test("Single File Upload test",async({page})=>{
    await page.goto("https://uploadnow.io/en");

    await page.waitForSelector("//*[text()='Add files']");
    await page.locator("//input[@type='file']").setInputFiles("tests/files/test1");
    expect (await page.locator("//div[@class='cards_overlay_title__SKsjB']")).toHaveText("1 selected file ready to send");
    await page.locator("//input[@type='file']").setInputFiles([]);

    await page.waitForTimeout(3000);

})

test("Multiple File Upload test",async({page})=>{
    await page.goto("https://uploadnow.io/en");
    await page.waitForSelector("//*[text()='Add files']");
    await page.locator("//input[@type='file']").setInputFiles(["tests/files/test1","tests/files/test2"]);
    expect (await page.locator("//div[@class='cards_overlay_title__SKsjB']")).toHaveText("2 selected files ready to send");
    await page.locator("//input[@type='file']").setInputFiles([]);
    await page.waitForTimeout(3000);
    await page.close();

})