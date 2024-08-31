import { test, expect } from '@playwright/test';

test('Frames handling test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const allframes=await page.frames();
  console.log(allframes.length);

//Approach 1
/*   
  const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
   frame1.fill("//input[@name='mytext1']","Suyash");
*/

//Approach 2
  await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("Suyash");
  await page.waitForTimeout(5000);

  await page.close();

})