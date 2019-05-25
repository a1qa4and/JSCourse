"use strict";

const { By } = require('selenium-webdriver');
const { locators } = require('./constants');
const BasePage = require('../../framework/basePage');

class ResultPage extends BasePage {

    constructor(browser) {
        super(browser, locators.page);
    }

    async getResultsAmount() {
        let resultStats = await this.browser.findElement(locators.resultStats, 'Result stats');
        let rawText = await resultStats.getText();
        return Number(rawText.match('(?<=.\\s)(\\d.*\\d)(?=\\s\\()')[0].replace(/\s/g, ''));
    }

    async isLinkPresent(link) {
        return await this.browser.isElementPresent(By.css(`a[href='${link}']`), "Link");
    }
}

module.exports = ResultPage;