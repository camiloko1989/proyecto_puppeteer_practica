const { BrowserContext } = require("puppeteer");

module.exports ={
    launch: {
        headless: false,
        slowMo:20,
        defaultViewport: null
    },
    browserContext: 'default'
}