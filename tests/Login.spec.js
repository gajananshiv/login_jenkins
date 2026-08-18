const {test,chromium} = require('@playwright/test')

test("login orange hrm", async () =>{

    test.setTimeout(30000)
    const browser = await chromium.launch({headless : false});

    const context = await browser.newContext();

    const page = await context.newPage();
    await page.waitForTimeout(3000)


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000)

    await page.getByRole('textbox',{name : 'Username'}).fill("Admin");
    await page.waitForTimeout(3000)

    await page.getByRole('textbox', {name : 'Password'}).fill("admin123");
    await page.waitForTimeout(3000)

    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(3000)

})