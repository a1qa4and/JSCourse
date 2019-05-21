"use strict";

class Helpers {

    static sortDates(listOfDates) {
        return listOfDates.sort((a, b) => new Date(b) - new Date(a));
    }

    static rateСhangesSign(prevRate, currentRate) {
        return (prevRate == currentRate) ? '' : (prevRate < currentRate) ? '+ ' : '- ';
    }

    static addRateChangeSign(rateList) {
        let rateListWithSign = rateList;
        if (rateList.length >= 2) {
            rateListWithSign = [rateList[0].toString()];
            for (var i = 1; i < rateList.length; i++) {
                let prevRate = rateList[i - 1];
                let currentRate = rateList[i];
                rateListWithSign.push(this.rateСhangesSign(prevRate, currentRate) + currentRate);
            }
        }
        return rateListWithSign;
    }
}

module.exports = Helpers; 