// suite description
describe("enhancedDate", function () {
	
	var outcome;
	// section description
	describe("setDate", function () {
		it("should create new Date object", function () {
			outcome = enhancedDate.setDate();
			expect(outcome).to.be.instanceOf(Date);
		});
		it("should create new Date object with epoch 100000 from number", function () {
			outcome = enhancedDate.setDate(100000);
			expect(outcome).to.deep.equal(new Date(100000));
		});
	});
	describe("getDate", function () {
		it("should return current time as number", function () {
			outcome = enhancedDate.getDate(); 
			expect(outcome).to.be.a('number');
		});
		it("should return current time as Date object", function () {
			outcome = enhancedDate.getDate(true);
			expect(outcome).to.be.instanceOf(Date);
		});
	});
	describe("getDayName", function () {
		it("should return a string", function () {
			outcome = enhancedDate.getDayName();
			expect(outcome).to.be.a('string');
		});
		it("should equal 'Thursday'", function () {
			enhancedDate.setDate(new Date(2015, 4, 21));
			outcome = enhancedDate.getDayName();
			expect(outcome).to.equal('Thursday');
		});
	});
	describe("getMonthName", function () {
		it("should return a string", function () {
			outcome = enhancedDate.getMonthName();
			expect(outcome).to.be.a('string');
		});
		it("should equal 'May'", function () {
			enhancedDate.setDate(new Date(2015, 4, 21));
			outcome = enhancedDate.getMonthName();
			expect(outcome).to.equal('May');
		});
	});
	describe("isToday", function () {
		it("should return false", function () {
			enhancedDate.setDate(new Date(2015, 1, 22));
			outcome = enhancedDate.isToday();
			expect(outcome).to.be.false;
		});
		it("should return true", function () {
			enhancedDate.setDate(new Date());
			outcome = enhancedDate.isToday();
			expect(outcome).to.be.true;
		});
	});
	describe("isFuture", function () {
		it("should return false", function () {
			enhancedDate.setDate(new Date(2015, 1, 22));
			outcome = enhancedDate.isFuture();
			expect(outcome).to.be.false;
		});
		it("should return true", function () {
			enhancedDate.setDate(Date.now() + 100000);
			outcome = enhancedDate.isFuture();
			expect(outcome).to.be.true;
		});
	});
});
