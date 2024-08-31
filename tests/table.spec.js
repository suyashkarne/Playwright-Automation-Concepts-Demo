import { test, expect } from '@playwright/test';


test("Table test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table=await page.locator("//table[@id='productTable']");

    // const column=await page.locator("//table[@id='productTable']/thead/tr/th");
    const column=await table.locator("thead tr th");

    console.log("No of columns:",await column.count())

    // const rows=await page.locator("//table[@id='productTable']/tbody/tr");
    const rows=await table.locator("tbody tr");

    console.log("No of rows:",await rows.count())

    expect (await column.count()).toBe(4);
    expect (await rows.count()).toBe(5);

await selectProduct(rows,page,"Product 1");
await selectProduct(rows,page,"Product 2");
await selectProduct(rows,page,"Product 3");

    await page.waitForTimeout(5000);
    await page.close();


})

async function selectProduct(rows,page,name){
    const matchedRow=rows.filter({
        has:await page.locator("td"),
        hasText:name
})
await matchedRow.locator("//input[@type='checkbox']").check();
}   