const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const { describe, it } = require('mocha');


describe('Google Search', () => {
    let browser;
    /* eslint-disable no-undef */
    before(async () => {
        browser = new Browser();
        await browser.start();
    });
    
    /* eslint-disable no-undef */    
    after(async () => {
        await browser.quit();
    });

    it('should search for "webdriver"', async () => {
        const homePage = new HomePage(browser);
        homePage.search('webdriver');
    });
});