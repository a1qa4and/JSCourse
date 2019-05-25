const { By } = require('selenium-webdriver');

const locators = {
    page: By.id('viewport'),
    searchInput: By.name('q')
};

module.exports = { locators };