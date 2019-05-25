const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const ResultPage = require('../../pages/resultPage');
const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('Google Search', () => {
    let browser;
    let homePage;
    let resultPage;
    let minResultsAmount = 100000;
    let expectedResultLink = 'https://www.seleniumhq.org/projects/webdriver/';

    /* eslint-disable no-undef */
    before(async () => {
        browser = new Browser();
        await browser.start();
        homePage = new HomePage(browser);
        resultPage = new ResultPage(browser);
    });
    
    /* eslint-disable no-undef */    
    after(async () => {
        await browser.quit();
    });

    it('should search for "webdriver"', async () => {
        assert.isTrue(await homePage.isOpened(), 'Home page isn`t opened');
        await homePage.search('webdriver');
        assert.isTrue(await resultPage.isOpened(), 'Result page isn`t opened');
    });

    it(`should find more than ${minResultsAmount} results`, async () => {
        assert.isAbove(await resultPage.getResultsAmount(), minResultsAmount, 'Results amount less than expected');
    });

    it(`should show "${expectedResultLink}" link on the first page`, async () => {
        assert.isTrue(await resultPage.isLinkPresent(expectedResultLink), `Link "${expectedResultLink}" not found on the page`);
    });
});