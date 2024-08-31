import { test, expect } from '@playwright/test';

let page;
const handleAlert=async ({dialog})=>{
    expect (dialog.message()).toContain("Product added.");
    await dialog.accept();
}
test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
    await page.locator("//a[text()='Log in']").click();
    await page.fill("//input[@id='loginusername']","pavanol");
    await page.fill("//input[@id='loginpassword']","test@123");
    await page.locator("//button[text()='Log in']").click();
})

test("Homepage Test",async()=>{

    await page.waitForSelector("//div[@class='card-block']");
    const products=await page.$$("//div[@class='card-block']");
    expect(products).toHaveLength(9);

})

test("Add to cart",async()=>{

    page.on('dialog',handleAlert);
    await page.click("//a[text()='Samsung galaxy s6']");
    await page.click("//a[text()='Add to cart']");

    page.off('dialog',handleAlert);

})

test.afterEach(async()=>{
    await page.locator("//a[@id='logout2']");
    await page.close();
})
