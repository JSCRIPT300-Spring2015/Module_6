describe("enhancedDate Functions", function() {

	describe("setDate", function () {

		var now = new Date();

	    it("should set the date passed in to be a new Date", function () {

	        expect(enhancedDate.setDate(now).getTime()).to.equal(now.getTime());
	    });
	    it("should set the _date to now if something invalid is passed in", function () {

	        expect(enhancedDate.setDate("Today is great!").getTime()).to.equal(new Date().getTime());
	    });
	});
	describe("getDate", function () {

	    it("should return a time", function () {

	        expect(enhancedDate.getDate(true)).to.be.a('Date');
	    });
	    it("should return an epoch time if no parameter is passed in", function () {

	        expect(enhancedDate.getDate()).to.be.a('number');
	    });
	});
	describe("getDayName", function () {

		beforeEach(function() {
			enhancedDate.setDate(new Date('05/18/15'));
		})

	    it("should return a day of the week", function () {

	        expect(enhancedDate.getDayName()).to.equal('Monday');
	    });
	    it("should not return a number", function () {

	        expect(enhancedDate.getDayName()).to.not.be.a('number');
	    });
	});
	describe("getMonthName", function () {

		before(function() {
			enhancedDate.setDate(new Date('04/18/15'));
		})

	    it("should return the Month of what was passed in", function () {

	        expect(enhancedDate.getMonthName()).to.equal('April');
	    });
	    it("should not return a number", function () {

	        expect(enhancedDate.getMonthName()).to.not.be.a('number');
	    });
	});
	describe("isToday", function () {
	    it("should return true if passed today", function () {
			enhancedDate.setDate(new Date());
	        expect(enhancedDate.isToday()).to.be.ok;
	    });
	    it("should return false if not passed today", function () {
			enhancedDate.setDate(new Date('04/18/15'));
	        expect(enhancedDate.isToday()).to.not.be.ok;
	    });
	});
	describe("isFuture", function () {
	    before(function() {
			enhancedDate.setDate(new Date('06/18/15'));
		})
	    it("should return true if in the future", function () {

	        expect(enhancedDate.isFuture()).to.be.ok;
	    });
	    it("should return false if in the past", function () {
			enhancedDate.setDate(new Date('04/18/15'));
	        expect(enhancedDate.isFuture()).to.not.be.ok;
	    });
	});
});