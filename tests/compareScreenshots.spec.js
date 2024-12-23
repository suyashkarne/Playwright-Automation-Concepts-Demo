import {test,expect} from '@playwright/test'

test('Compare Screenshot',async({page})=>{
    await page.goto("https://retail.onlinesbi.sbi/npersonal/faq.html");

    //compare full page ss of sbi faq
    expect (await page.screenshot()).toMatchSnapshot('sbiFaq.png');

    //compare specific element ss
    expect (await page.locator("//header[@data-include='header']").screenshot()).toMatchSnapshot('faqHeader.png');

    await page.close();
})
