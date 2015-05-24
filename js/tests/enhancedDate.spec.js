// describing spec (what's being tested)
describe("enhancedDate", function () {

	// Test each method within object

	// setDate
	describe("setDate", function () {

		it("Return same date object as date object given.", function () {
			var newDate = new Date("Dec 12, 2015");
			var newDateString = newDate.toString();
			var setDateResult = enhancedDate.setDate(newDate);
			var setDateString = setDateResult.toString();

			expect(newDateString).to.equal(setDateString);
		});

		it("Give unix time then get date object back that represents that same time.", function () {
			var dateNumber = 1432406605;
			var setDateResult = enhancedDate.setDate(dateNumber);
			var setDateNumber = setDateResult.valueOf();

			expect(dateNumber).to.equal(setDateNumber);
		});
	});

	// getDate
	describe("getDate", function () {

		it("", function () {

		});
	});

	// getDayName
	describe("getDayName", function () {

		it("Create a new Date object to set date with.", function () {
			var dayName = enhancedDate(new Date(2015, 4, 14));

			expect(dayName).to.equal("Thursday");
		});
	});

	// getMonthName
	describe("getMonthName", function () {

		it("", function () {

		});
	});

	// isToday
	describe("isToday", function () {

		it("", function () {

		});
	});

	// isFuture
	describe("isFuture", function () {

		it("", function () {

		});
	});

});
