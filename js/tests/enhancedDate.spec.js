describe("enhancedDate", function () {

	describe("setDate", function() {
		it("should set the date object", function() {
			expect(enhancedDate.setDate()).to.be.an.instanceof(Date);
		});
		it("should accept a new date given", function() {
			expect(enhancedDate.setDate(new Date(1988, 5, 7))).to.be.deep.equal(new Date(1988, 5, 7));
		});
	});

	describe("getDate", function() {
		it("should return a date object", function() {
			expect(enhancedDate.getDate(true)).to.be.an.instanceof(Date);
		});
		it("should return a number if we don't pass anything in", function() {
			expect(enhancedDate.getDate()).to.be.a('number');
		});
	});

	describe("getDayName", function() {
		before(function() {
			enhancedDate.setDate(new Date(1988, 6, 5));
		});

		it("should give us a string", function() {
			expect(enhancedDate.getDayName()).to.be.a('string');
		});
		it("should return Tuesday", function() {
			expect(enhancedDate.getDayName()).to.equal("Tuesday");
		});
	});

	describe("getMonthName", function() {
		before(function() {
			enhancedDate.setDate(new Date(1988, 6, 5));
		});

		it("should give us a string", function() {
			expect(enhancedDate.getMonthName()).to.be.a("string");
		});

		it("should return July", function() {
			expect(enhancedDate.getMonthName()).to.equal("July");
		});
	});

	describe("isToday", function() {
		it("should be true if it is today", function() {
			enhancedDate.setDate(new Date());
			expect(enhancedDate.isToday()).to.be.true;
		});
		it("should be false if it is not today", function() {
			enhancedDate.setDate(new Date(1988, 6, 5));
			expect(enhancedDate.isToday()).to.be.false;
		});
	});
	
	describe("isFuture", function() {
		it("should be true if it is future", function() {
			enhancedDate.setDate(new Date(2020, 6, 8));
			expect(enhancedDate.isFuture()).to.be.true;
		});
		it("should be false if it is not future", function() {
			enhancedDate.setDate(new Date(1988, 6, 5));
			expect(enhancedDate.isFuture()).to.be.false;
		});
	});
});