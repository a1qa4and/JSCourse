const { By } = require('selenium-webdriver');

const locators = {
    page: By.id('hdtbSum'),
    resultStats: By.id('resultStats')
};

module.exports = { locators };