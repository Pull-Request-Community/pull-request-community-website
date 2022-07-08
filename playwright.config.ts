import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    webServer: {
        command: "npm run start",
        url: "http://localhost:3000",
    }
};

export default config;