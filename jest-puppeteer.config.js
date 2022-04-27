const { BrowserContext } = require("puppeteer");

module.exports ={
    launch: {
        headless: false,
        slowMo:100,
    },
    browserContext: 'default'
}