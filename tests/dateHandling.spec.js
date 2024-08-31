import { test, expect } from '@playwright/test';


test("Date Selection test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const year="2024";
    const month="December";
    const date="31";
    await page.click("//input[@id='datepicker']");

    while(true)
    {
        if(await page.locator("//span[@class='ui-datepicker-month']").textContent()==month && await page.locator("//span[@class='ui-datepicker-year']").textContent()==year)
            break;
        await page.click("//span[text()='Next']");
    }

    const dates=await page.$$("//a[@class='ui-state-default']");

    for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
        }
    }

    await page.waitForTimeout(5000);
    await page.close();


})