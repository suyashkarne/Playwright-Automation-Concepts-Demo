import { test, expect } from '@playwright/test';

test("Drag and Drop test",async({page})=>{
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

    const source=await page.locator("//div[@id='box4']");
    const destination=await page.locator("//div[@id='box103']");

    //Approach 1

    /*await source.hover();
    await page.mouse.down();

    await destination.hover();
    await page.mouse.up();*/

    //Approach 2

    await source.dragTo(destination);
    await page.close();


})