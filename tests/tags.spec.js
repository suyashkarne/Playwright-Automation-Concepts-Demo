import { test, expect } from '@playwright/test';

test("Test1@sanity",async({page})=>{
    console.log("Test 1..")
})

test("Test2@sanity",async({page})=>{
    console.log("Test 2..")
})
test("Test3@regression",async({page})=>{
    console.log("Test 3..")
})

test("Test4@regression",async({page})=>{
    console.log("Test 4..")
})
test("Test5@sanity@regression",async({page})=>{
    console.log("Test 5..")
})