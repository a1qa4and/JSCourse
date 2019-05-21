"use strict";

var dateFormat = require('dateformat');
const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

class DateTime {

    today() {
        let date = new Date();
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }

    setYear(date, year) {
        date.setFullYear(year);
        return date;
    }

    daysDifference(dateLeft, dateRight) {
        return parseInt((dateLeft - dateRight) / oneDayInMilliseconds);
    }

    getDateBeforeToday(daysBefore) {
        return new Date(this.today() - daysBefore * oneDayInMilliseconds);
    }

    dateFormat(date, format){
        return dateFormat(date, format);
    }

}

module.exports = new DateTime();