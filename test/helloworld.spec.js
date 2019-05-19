const { describe, it } = require('mocha');
const should = require('chai').should();
const { expect } = require('chai');
const logger = require('../util/log.util');
const dateTime = require('../util/dateTime.util');


describe('Hello World TestSuite', () => {
    it('should write "Hello World"', () => {
        logger.info("Hello World");
    });
});


describe('DateTime TestSuite', () => {
    it('today() should return current Date (Year Month Day with zero time)', () => {
        var actualDate = dateTime.today();
        var expectedDate = new Date();
        expectedDate.setUTCHours(0, 0, 0, 0);

        actualDate.should.be.eql(expectedDate);
    });

    it('setYear() should return Date with updated year', () => {
        var expectedYear = 1999;
        var date = new Date(2019, 3, 5);
        var expectedDate = new Date(expectedYear, 3, 5);
        dateTime.setYear(date, expectedYear);

        expect(date).to.eql(expectedDate);
    });

    it('daysDifference() should return correct amount of days between Dates', () => {
        var expectedDaysDifference = 10;
        var dateLeft = new Date(2019, 3, 25);
        var dateRight = new Date(2019, 3, 25 - expectedDaysDifference);

        expect(dateTime.daysDifference(dateLeft, dateRight)).to.eql(expectedDaysDifference);
    });
});