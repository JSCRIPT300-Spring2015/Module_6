// describing spec (what's being tested)
describe("enhancedDate", function () {

	// setDate
	describe("setDate", function () {

		it("Return same date object as date object given.", function () {
			var newDate = new Date("Dec 12, 2015");

			expect(enhancedDate.setDate(newDate)).to.deep.equal(new Date(newDate));
		});

		it("Give unix time then get date object back that represents that same time.", function () {
			var dateNumber = 1432406605;

			expect(enhancedDate.setDate(dateNumber)).to.deep.equal(new Date(dateNumber));
		});

		it("Should return date object.", function () {
			expect(enhancedDate.setDate()).to.be.an.instanceOf(Date);
		});

		it("Should return an object identical to the one passed in.", function () {
			expect(enhancedDate.setDate(new Date(2015, 4, 26))).to.be.deep.equal(new Date(2015, 4, 26));
		});
	});

	// getDate
	describe("getDate", function () {

		it("Should return a date object if true is passed in.", function () {
			expect(enhancedDate.getDate(true)).to.be.an.instanceOf(Date);
		});

		it("Should return a number if nothinng is passed in.", function () {
			expect(enhancedDate.getDate()).to.be.a('number');
		});

	});

	// getDayName
	describe("getDayName", function () {

		before(function () {
		    enhancedDate.setDate(new Date(2015, 4, 26));
		});
		
		it('Should return a string.', function () {
		    expect(enhancedDate.getDayName()).to.be.a('string');
		});
		
		it('Should return "Tuesday".', function () {
		    expect(enhancedDate.getDayName()).to.equal('Tuesday');
		});
	});

	// getMonthName
	describe("getMonthName", function () {

		before(function () {
		    enhancedDate.setDate(new Date(2015, 4, 26));
		});

		it('Should return a string.', function () {
		    expect(enhancedDate.getMonthName()).to.be.a('string');
		});

		it('Should return "May".', function () {
		    expect(enhancedDate.getMonthName()).to.equal('May');
		});
	});

	// isToday
	describe("isToday", function () {
	
	    it("Should return true if it is today.", function () {
	        enhancedDate.setDate(new Date());
		    expect(enhancedDate.isToday()).to.be.true
	    });

	    it("Should return false if it is not today.", function () {
	        enhancedDate.setDate(new Date(2014, 4, 26));
	        expect(enhancedDate.isToday()).to.be.false;
	    });
	});

	// isFuture
	describe("isFuture", function () {
	
	    it("Should return true if the date is in the future.", function () {
	        enhancedDate.setDate(new Date(2120, 4, 26));
	        expect(enhancedDate.isFuture()).to.be.true;
	    });

	    it("Should return false if the date is not in the future.", function () {
	        enhancedDate.setDate(new Date(Date));
	        expect(enhancedDate.isFuture()).to.be.false;
	    });
	});
});
