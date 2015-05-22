describe("enhancedDate", function(){
	//set date test
	describe("setDate test ", function(){
		
		it("set date is and instance of date", function(){
			expect(enhancedDate.setDate(new Date(2015, 4, 14))).is.an.instanceOf(Date);
		});
		
		it("set date returned a date with no date set in", function(){
			expect(enhancedDate.setDate()).to.deep.equal(new Date());
		});
	});
	//get date test
	describe("getDate test", function(){
		it("getdate shoule be a number if nothing is passed", function(){
			expect(enhancedDate.getDate()).to.be.a('Number');
		});
		
		it("getdate should be an instance of date", function(){
			expect(enhancedDate.getDate(true)).is.an.instanceOf(Date);
		});
	});
	//get day name
	describe("getDayName test", function(){
		it("getDayName should be a string", function(){
			expect(enhancedDate.getDayName()).to.be.a('String');
		});
		
		it("getdayname should be equal to thursday on 4/14/15", function(){
			expect(enhancedDate.getDayName(new Date(2015, 4, 14))).to.equal("Thursday");
		});
		
	}); 
	//get month name
	describe("getMonthName test", function(){
		it("getmonthname should be equal to apirl", function(){
			expect(enhancedDate.getMonthName(new Date(2015, 4, 14))).to.equal("May");
		});
		
		it("getmonthName should be a string", function(){
			expect(enhancedDate.getMonthName()).to.be.a('String');
		});
		
	});
	//is today
	describe("isToday test", function(){
		it("isToday should be true for a type of boolean ", function(){
			expect(enhancedDate.isToday()).to.be.a('Boolean');
		});
		
		it("isToday should be true", function(){
			enhancedDate.setDate();
			expect(enhancedDate.isToday()).to.be.true;
		});
		
	});
	// is future
	describe("isFuture test", function(){
		it("isfuture should be a true for a type of boolean", function(){
			expect(enhancedDate.isFuture()).to.be.a("boolean");
		});
		
		it("isfuture should be false for not future on setdate", function(){
			enhancedDate.setDate();
			expect(enhancedDate.isFuture()).to.not.be.true;
		});
		
	});
	 
	
});
