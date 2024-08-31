import { test, expect } from '@playwright/test';


test("Pagination test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table=await page.locator("//table[@id='productTable']");

    // const column=await page.locator("//table[@id='productTable']/thead/tr/th");
    const column=await table.locator("thead tr th");

    // const rows=await page.locator("//table[@id='productTable']/tbody/tr");
    const rows=await table.locator("tbody tr");

    const pages=await page.locator("//ul[@id='pagination']/li");

    console.log("Pages are ",await pages.count());

    for(let p=0;p<await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }
        for(let i=0;i<await rows.count();i++)
            {
               const row=await rows.nth(i);
               const tds=await row.locator('td');
        
               for(let j=0;j<await tds.count()-1;j++)
               {
                console.log(await tds.nth(j).textContent());
               }
            }
    }

    await page.close();
    
})