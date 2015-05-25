describe("Enhanced Date", function () {
	'use strict';

	describe("getDate", function () {

		it("should initialize a date if one is not set and be of a Date instance", function () {
			expect(enhancedDate.getDate(true)).to.be.instanceof(Date);
		});

		before(function () {
			enhancedDate.setDate(new Date(2015, 4, 14));
		});

		it("should be today", function () {
			expect(enhancedDate.getDate(true)).to.deep.equal(new Date(2015, 4, 14));
		});

		it("should create a date object in milliseconds when nothing passed", function () {
			expect(enhancedDate.getDate()).to.be.a('number');
		});		
	});

	describe("setDate", function () {

		it("should be a date object", function () {
			expect(enhancedDate.setDate()).to.be.instanceof(Date);
		});

		it("should be equal to the passed in date object", function () {
			expect(enhancedDate.setDate(new Date(2015, 4, 14))).to.deep.equal(new Date(2015, 4, 14));
		});

		it("should be equal to a date object created from milliseconds", function () {
			expect(enhancedDate.setDate(new Date(0))).to.deep.equal(new Date(0));
		});
	});

	describe("getDayName", function () {

		before(function () {
			enhancedDate.setDate(new Date(2015, 4, 14));
		});

		it("The day name of 5/14/15 should be Thursday", function () {
			expect(enhancedDate.getDayName()).to.equal('Thursday');
		});

		it("The return type should be a string", function () {
			expect(enhancedDate.getDayName()).to.be.a('string');
		});
	});

	describe("getMonthName", function () {

		before(function () {
			enhancedDate.setDate(new Date(2015, 4, 14));
		});

		it("The month name of 5/14/15 should be May", function () {
			expect(enhancedDate.getMonthName()).to.equal('May');
		});

		it("The return type should be a string", function () {
			expect(enhancedDate.getMonthName()).to.be.a('string');
		});
	});

	describe("isToday", function () {

		it("When no date of today is set, the return value should be true", function () {
			enhancedDate.setDate(new Date());
			expect(enhancedDate.isToday()).is.ok;
		});

		it("When a past date is set prior, the return value should be false", function () {
			enhancedDate.setDate(new Date(2015, 4, 14));
			expect(enhancedDate.isToday()).is.not.ok;
		});

		it("Expect type to be a boolean", function () {
			expect(enhancedDate.isToday()).to.be.a('boolean');
		});
	});

	describe("isFuture", function () {

		it("When no date of today is set, the return value should be true", function () {
			var date = new Date();
			date.setDate(date.getDate() + 1);
			enhancedDate.setDate(date);
			expect(enhancedDate.isFuture()).is.ok;
		});

		it("When a past date is set prior, the return value should be false", function () {
			enhancedDate.setDate(new Date());
			expect(enhancedDate.isFuture()).is.not.ok;
		});

		it("Expect type to be a boolean", function () {
			expect(enhancedDate.isFuture()).to.be.a('boolean');
		});
	});
});