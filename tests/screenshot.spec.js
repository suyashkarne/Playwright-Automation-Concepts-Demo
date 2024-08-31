import { test, expect } from '@playwright/test';


test("Screenshot",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.screenshot({path:"tests/screenshots/"+Date.now()+"homepage.png"});
    await page.close();
})

test("Full page screenshot",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.screenshot({path:"tests/screenshots/"+Date.now()+"homepagefull.png",fullPage:true});
    await page.close();

})

test("Element screenshot",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.locator("(//div[@class='card h-100'])[1]").screenshot({path:"tests/screenshots/"+Date.now()+"homepage.png"});
    await page.close();
})