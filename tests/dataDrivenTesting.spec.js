import { test, expect } from '@playwright/test';

const computerData=[{
    name:"comp 1",
    manufacture:"RCA"
},
{
    name:"comp 2",
    manufacture:"IBM"
},
{
    name:"comp 3",
    manufacture:"Canon"
},
{
    name:"comp 4",
    manufacture:"Nokia"
},
{
    name:"comp 5",
    manufacture:"Sony"
}
]

computerData.forEach(data=>{
test(`Data driven testing ${data.name}`, async ({page}) => {

    await page.goto("https://computer-database.gatling.io/computers");
    await page.click("//a[text()='Add a new computer']");
    await page.fill("//input[@id='name']",data.name)
    await page.selectOption("//select[@id='company']",{
        label:data.manufacture
    })
    await page.click("//input[@type='submit']");
    await expect(page.locator("//div[@class='alert-message warning']")).toContainText("Done");
})
})