describe("To check leap year functionality", () => {

     it("Should display Leap year if the given value is divisible by 400", () => {

            expect(checkLeapYear(2000)).toBeTruthy();
     });

    it("Should display not a leap year if the given year is divisible by 100 but not by 400", () => {

            expect(checkLeapYear(2100)).toBeTruthy();
    });

}) ;


