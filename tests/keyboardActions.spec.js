import { test, expect } from '@playwright/test';

test("Keyboard actions test",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");

    await page.fill("//textarea[@name='text1']","Welcome to Playwright");

    //Control + A
    await page.keyboard.press("Control+A");
    
    //Control + C
    await page.keyboard.press("Control+C");

    //TAB
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    //Control + V
    await page.keyboard.press("Control+V");

    await page.close();

})