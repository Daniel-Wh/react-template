import { test, expect} from '@playwright/test';

test('Confirm text on homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')
    
    await expect(page.locator(".App-link")).toHaveText("Learn React", {useInnerText: true})
})