const { describe, it } = require('mocha');
const { expect } = require('chai');
var chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const Index = require('../../pages/exchangerate');

describe('Exchange Rate TestSuite', () => {

    let baseCurrency = 'USD';
    let currencyToExchange = 'RUB';
    let amountOfDays = 10;

    it('I want to see if rate on my currency is growing compare to 10 days before today (by date)', async () => {
        let index = new Index();
        let rateChanges = await index.getRatesForDaysBeforeByDate(amountOfDays, baseCurrency, currencyToExchange);
        await expect(rateChanges).to.have.lengthOf(amountOfDays);
        /* eslint-disable no-console */
        console.log(rateChanges);
    });

    it('I want to see if rate on my currency is growing compare to 10 days before today (by history)', async () => {
        let index = new Index();
        let rateChanges = await index.getRatesForDaysBeforeByHistory(amountOfDays, baseCurrency, currencyToExchange);
        await expect(rateChanges).to.have.lengthOf.below(amountOfDays + 1);
        /* eslint-disable no-console */
        console.log(rateChanges);
    });
});