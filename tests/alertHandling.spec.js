import { test, expect } from '@playwright/test';

test('Simple Alert test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async(dialog)=>{
    expect (dialog.type()).toContain('alert');
    expect (dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
  })

  await page.click("//button[text()='Alert']");
  await page.close();

})

test('Dialog Box test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    page.on('dialog', async(dialog)=>{
      expect (dialog.type()).toContain('confirm');
      expect (dialog.message()).toContain('Press a button!');
      await dialog.accept();
    })

    await page.click("//button[text()='Confirm Box']");
    await page.close();


  })

  test('Prompt alert test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    page.on('dialog', async(dialog)=>{
      expect (dialog.type()).toContain('prompt');
      expect (dialog.message()).toContain('Please enter your name:');
      expect(dialog.defaultValue()).toBe("Harry Potter");
      await dialog.accept("Suyash");
    })

    await page.click("//button[text()='Prompt']");
    await page.close();
  })