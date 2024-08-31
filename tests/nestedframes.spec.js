import { test, expect } from '@playwright/test';

test('Nested frames test', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const allframes=await page.frames();
    console.log(allframes.length);

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    frame3.fill("//input[@name='mytext3']","Suyash")

    const childFrames=await frame3.childFrames();
    console.log(childFrames.length);

    await childFrames[0].locator("//span[@dir='auto'  and text()='I am a human']").click();

    await page.waitForTimeout(5000);

    await page.close();


})