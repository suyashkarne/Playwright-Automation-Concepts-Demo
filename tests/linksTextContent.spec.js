import { test, expect } from '@playwright/test';

test("Multiple links content test",async ({page})=>{
await page.goto("https://www.demoblaze.com/");
await page.waitForSelector("//div[@id='contcont']/div/div/following-sibling::div/div/div/div/div/h4/a");
const elements=await page.$$("//div[@id='contcont']/div/div/following-sibling::div/div/div/div/div/h4/a");
for(let i=0;i< elements.length;i++)
{
    console.log(await elements[i].textContent());
}

await page.close();

})