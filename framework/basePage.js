"use strict";

class BasePage {

    constructor(browser, by) {
        this.browser = browser;
        this.by = by;
    }

    async isOpened(){
        return this.browser.isElementPresent(this.by);
    }
}

module.exports = BasePage;