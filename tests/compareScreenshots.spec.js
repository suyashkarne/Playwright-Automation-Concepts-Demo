import {test,expect} from '@playwright/test'

test('Compare Screenshot',async({page})=>{
    await page.goto("https://retail.onlinesbi.sbi/npersonal/faq.html");

    //compare full page ss of website faq
    expect (await page.screenshot()).toMatchSnapshot('sbiFaq.png');

    //compare specific element ss of website faq
    expect (await page.locator("//header[@data-include='header']").screenshot()).toMatchSnapshot('faqHeader.png');

    await page.close();
})
