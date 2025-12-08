const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    modifyObstructiveCode: false,

    // FIX: Force same user-agent as browser
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,

    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chromium") {

          // FIX: Tell Chrome not to block mixed TLS traffic
          launchOptions.args.push("--disable-web-security");
          launchOptions.args.push("--allow-running-insecure-content");

          // FIX: Same user-agent as normal browser (firewall whitelists this)
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
