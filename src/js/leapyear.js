function checkLeapYear(year) {
    return year % FOUR_HUNDRED === 0 || (year % HUNDRED !== 0 && year % FOUR === 0 );
}