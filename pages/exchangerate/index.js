"use strict";

const { expect } = require('chai');
var chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const Helpers = require('./helpers');
const { api } = require('./constants');
const dateTime = require('../../util/dateTime.util');

class Index {

    getCurrentRate(baseCurrency, currencyToExchange) {
        let response = chai.request(api.url).get('/latest')
            .query(
                {
                    base: baseCurrency,
                    symbols: currencyToExchange
                });

        return response;
    }

    getRateOnDate(date, baseCurrency, currencyToExchange) {
        let response = chai.request(api.url).get('/' + dateTime.dateFormat(date, "yyyy-mm-dd"))
            .query(
                {
                    base: baseCurrency,
                    symbols: currencyToExchange
                });

        return response;
    }

    async getRatesFromHistory(daysBefore, baseCurrency, currencyToExchange) {
        let response = await chai.request(api.url).get('/history')
            .query(
                {
                    start_at: dateTime.dateFormat(dateTime.getDateBeforeToday(daysBefore + 1), "yyyy-mm-dd"),
                    end_at: dateTime.dateFormat(dateTime.getDateBeforeToday(1), "yyyy-mm-dd"),
                    base: baseCurrency,
                    symbols: currencyToExchange
                });

        return response;
    }

    getRateOnDateBeforeToday(daysBefore, baseCurrency, currencyToExchange) {
        return this.getRateOnDate(dateTime.getDateBeforeToday(daysBefore), baseCurrency, currencyToExchange);
    }

    async getRatesForDaysBeforeByDate(daysBefore, baseCurrency, currencyToExchange) {
        let rates = [];
        for (var i = daysBefore; i > 0; i--) {
            let response = await this.getRateOnDateBeforeToday(i, baseCurrency, currencyToExchange);
            expect(response).to.have.status(200);
            rates.push(JSON.parse(response.text).rates.RUB);
        }
        let rateChanges = Helpers.addRateChangeSign(rates.reverse());
        return rateChanges;
    }

    async getRatesForDaysBeforeByHistory(daysBefore, baseCurrency, currencyToExchange) {
        let response = await this.getRatesFromHistory(daysBefore, baseCurrency, currencyToExchange);
        expect(response).to.have.status(200);
        let rates = JSON.parse(response.text).rates;
        let rateChanges = Helpers.addRateChangeSign(Helpers.sortDates(Object.keys(rates)).map(key => rates[key].RUB));
        return rateChanges;
    }

}

module.exports = Index; 