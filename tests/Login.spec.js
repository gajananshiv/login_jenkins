const {test} = require('@playwright/test')

test("login orange hrm", async ({page}) =>{

    test.setTimeout(30000)

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByRole('textbox',{name : 'Username'}).fill("Admin");

    await page.getByRole('textbox', {name : 'Password'}).fill("admin123");

    await page.locator("//button[@type='submit']").click();


})