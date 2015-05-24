describe("Enhanced date", function () {
	

	describe("getDayName", function () {
		before(function() {
			enhancedDate.setDate(new Date("05-23-2015"));
		});
		it("should return Saturday", function() {
			expect(enhancedDate.getDayName()).to.be.equal("Saturday");
		});
		it("should be a string", function() {
			expect(enhancedDate.getDayName()).to.be.a("string");
		});
	});

	describe("setDate", function() {		

		it("should return instanceof date", function () {
        	expect(enhancedDate.setDate(new Date("05-23-2015"))).to.be.an.instanceof(Date);        	
		});
		it("should execute fast", function (done) {
        	expect(enhancedDate.setDate(new Date("05-23-2015"))).to.be.an.instanceof(Date); 
        	done();       	
		});
	});

	describe("getDate", function() {
		before(function() {
			enhancedDate.setDate(new Date("05-23-2015"));
		});	
		it("should return number", function () {
        	expect(enhancedDate.getDate()).to.be.a("number");        	
		});
		it("should execute fast", function (done) {
        	expect(enhancedDate.getDate()).to.be.a("number");  
        	done();       	
		});
	});

	describe("isToday", function () {
	before(function() {
		enhancedDate.setDate();
	});
		it("should return  true", function() {
			expect(enhancedDate.isToday()).to.be.true;
		});
		it("should return bool", function() {
			expect(enhancedDate.isToday()).to.be.a("boolean");
		});
	});

	describe("getMonthName", function () {
	before(function() {
		enhancedDate.setDate(new Date("05-23-2015"));
	});
		it("should return Saturday", function() {
			expect(enhancedDate.getMonthName()).to.be.equal("May");
		});
		it("should be a string", function() {
			expect(enhancedDate.getMonthName()).to.be.a("string");
		});
	});

	describe("isFuture", function () {
	before(function() {
		enhancedDate.setDate(new Date("01-01-2015"));
	});
		it("should return false", function() {
			expect(enhancedDate.isFuture()).to.be.false;
		});
		it("should return bool", function() {
			expect(enhancedDate.isFuture()).to.be.a("boolean");
		});
	});


		
});
