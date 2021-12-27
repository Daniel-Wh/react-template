import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        screenshot: 'only-on-failure'
    },
    projects: [
        {
            name: 'Chrome Stable',
            use: {
                browserName: 'chromium',
                channel: 'chrome'
            }
        }
    ]
};

export default config