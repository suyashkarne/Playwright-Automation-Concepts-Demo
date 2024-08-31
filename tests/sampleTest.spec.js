import { test, expect } from '@playwright/test';

test("Sample test",async({page})=>{
    await page.goto("https://www.google.com");
    const title= await page.title();
    console.log("Title is",title);
    const url= await page.url();
    console.log("URL is",url);
    await expect(page).toHaveTitle("Google");
    await expect(page).toHaveURL("https://www.google.com");
    page.close();
})