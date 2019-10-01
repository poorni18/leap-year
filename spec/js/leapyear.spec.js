describe("To check leap year functionality", () => {

     it("Should display Leap year if the given value is divisible by 400", () => {

          expect(checkLeapYear(2000)).toBeTruthy();
     });

    it("Should display not a leap year if the given year is divisible by 100 but not by 400", () => {

          expect(checkLeapYear(2100)).toBeTruthy();
    });

    it("Should display a leap year if the given year is divisible by 4 but not by 100", () => {

           expect(checkLeapYear(2008)).toBeTruthy();
     });

     it("Should display not a leap year if the given year is not divisible by 4", () => {

            expect(checkLeapYear(2017)).toBeTruthy();
      });

}) ;


