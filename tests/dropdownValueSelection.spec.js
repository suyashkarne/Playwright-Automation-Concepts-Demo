import { test, expect } from '@playwright/test';

test('Dropdown test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator("//select[@id='country']").selectOption({label:'India'});
  await page.locator("//select[@id='country']").selectOption('India');
  await page.locator("//select[@id='country']").selectOption({value:'india'});
  await page.locator("//select[@id='country']").selectOption({index:1});
  await page.selectOption("//select[@id='country']",'Canada');

  await page.waitForTimeout(5000);

  const options1=await page.locator("//select[@id='country']/option");
  expect(options1).toHaveCount(10);

  const options2=await page.$$("//select[@id='country']/option");
  expect(options2.length).toBe(10);

  const value=await page.locator("//select[@id='country']").textContent();
  expect(value.includes('India')).toBeTruthy();

  await page.close();

})