describe('enhancedDate', function () {

	describe('setDate', function () {

		it('should return a Date object', function () {
			expect(enhancedDate.setDate()).to.be.an.instanceof(Date);
		});

		it('should return an object identical to the one passed in', function () {
			expect(enhancedDate.setDate(new Date(2015, 5, 27))).to.be.deep.equal(new Date (2015, 4, 26));
		});
	});

	describe('getDate', function () {

		it('should return a Date ofject if true is passed in', function () {
			expect (enhancedDate.getDate(true)).to.be.an.instanceof(Date);
		});

		it('should return a number if nothing is passed in', function () {
			expect(enhancedDate.getDate()).to.be.a('number');
		});
	});

	describe('getDayName', function () {

		before(function () {
			enhancedDate.setDate(new Date(2015, 5, 27));
		});

		it('should return a string', function () {
			expect(enhancedDate.getDayName()).to.be.a('string');
		});

		it('should return "Wednesday"', function () {
			expect(enhancedDate.getDayName()).to.equal('Wednesday');
		});
	});

	describe('getMonthName', function () {

		before(function () {
			enhancedDate.setDate(new Date(2015, 5, 27));
		});

		it('should return a string', function () {
			expect(enhancedDate.getMonthName()).to.be.a('string');
		});

		it('should return "May"', function () {
			expect(enhancedDate.getMonthName()).to.equal('May');
		});
	});


	describe('isToday', function () {

		it('should return true if it is today', function () {
			enhancedDate.setDate(new Date());
			expect(enhancedDate.isToday()).to.be.true;
		});

		it('should return false if it is not today', function () {
			enhancedDate.setDate(new Date(2014, 5, 27));
			expect(enhancedDate.isToday()).to.be.false;
		});
	});

	describe('isFuture', function () {

		it('should return true if it is in the future', function () {
			enhancedDate.setDate(new Date(2116, 5, 27));
		});

		it('should return false if it is in the past', function () {
			enhancedDate.setDate(new Date(2014, 5, 27));
			expect(enhancedDate.isFuture()).to.be.false;
		});
	});
});