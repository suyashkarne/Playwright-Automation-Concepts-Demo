// import { test, expect } from '@playwright/test';

// //Only annotation
// test.only("Annotation Test1",async({page})=>{
//     console.log("Test 1..")
// })

// //skip annotation
// test.skip("Annotation Test2",async({page})=>{
//     console.log("Test 2..")
// })

// //skip on condition
// test("Annotation Test3",async({page,browserName})=>{
//     if(browserName=='chromium')
//         test.skip();
//     console.log("Test 3..")
// })

// //fixme
// test("Annotation Test4",async({page})=>{
//     test.fixme();
//     console.log("Test 4..")
// })

// //fail
// test("Annotation Test5",async({page})=>{
//     test.fail();
//     console.log("Test 5..");
//     expect(1).toBe(2);
// })

// //slow
// test("Annotation Test6",async({page})=>{
//     test.slow();
//     console.log("Test 6..");
//     await page.goto("https://www.demoblaze.com/");
// })