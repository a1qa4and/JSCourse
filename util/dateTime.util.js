"use strict"

class DateTime {

    today() {
        var date = new Date();
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }

    setYear(date, year) {
        date.setFullYear(year);
        return date;
    }

    daysDifference(dateLeft, dateRight) {
        var oneDayInMilliseconds = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        return parseInt((dateLeft - dateRight) / oneDayInMilliseconds);
    }

}

module.exports = new DateTime();