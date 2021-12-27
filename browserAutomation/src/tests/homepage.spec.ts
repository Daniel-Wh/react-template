import { test, expect} from '@playwright/test';

test('Confirm text on homepage', async ({ page }) => {
    await page.goto('https://daniel-wh.github.io/react-template/')

    await expect(page.locator(".App-link")).toHaveText("Lear React", {useInnerText: true})
})