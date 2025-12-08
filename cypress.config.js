const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    modifyObstructiveCode: false,

    defaultCommandTimeout: 10000,
    requestTimeout: 10000,

    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chromium") {

          launchOptions.args.push("--disable-web-security");
          launchOptions.args.push("--allow-running-insecure-content");

          launchOptions.args.push(
            "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
          );
        }
        return launchOptions;
      });

      return config;
    },
  },
});
