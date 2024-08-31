import { test, expect } from '@playwright/test';

test('Autosuggest test', async ({ page }) => {
  
  await page.goto("https://www.redbus.in/");

  await page.fill("//input[@id='src']","delhi");

  await page.waitForSelector("//ul[@class='sc-dnqmqq dZhbJF']/li");

  const opt=await page.$$("//ul[@class='sc-dnqmqq dZhbJF']/li");
  for(let o of opt)
  {
    console.log(await o.textContent());
    const temp=await o.textContent();
    if(temp.includes("Badarpur"))
        await o.click();
  }

  await page.close();


})