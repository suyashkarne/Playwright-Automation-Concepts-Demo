import { test, expect } from '@playwright/test';

test('Multiple dropdown test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.selectOption("//select[@id='colors']",['White','Green','Red']);
  const opt1=await page.locator("//select[@id='colors']/option");
  await expect(opt1).toHaveCount(5);
  const opt2=await page.$$("//select[@id='colors']/option");
  await expect(opt2.length).toBe(5);

  await page.close();


})