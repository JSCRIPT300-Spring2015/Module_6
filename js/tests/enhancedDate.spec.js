describe("enhancedDate", function () {

	'use strict';

	describe("setDate", function (){
		
		it("shoud be an instance of Date object if passed a date object", function(){
			expect(enhancedDate.setDate(new Date(2015, 4, 14))).to.be.instanceof(Date);
		});

		it("shoud be an instance of Date object if passed a number", function(){
			expect(enhancedDate.setDate(new Date().getTime())).to.be.instanceof(Date);
		});

		it("should return a today Date object if not passed a date object or number", function(){
			expect(enhancedDate.setDate()).to.equalDate(new Date());
		});
	});

	describe("getDate", function (){

		it("should return a number if not passed arguments", function(){
			expect(enhancedDate.getDate()).to.be.a('number');
		});

		it("should be a Date object if pass true for argument", function(){
			expect(enhancedDate.getDate(true)).to.be.instanceof(Date);
		});

	});

	describe("getDayName", function (){

		it("should return Thursday if passed Date object as 05-14-2015", function(){
			expect(enhancedDate.getDayName(new Date(2015, 4, 14))).to.equal("Thursday");
		});

		it("should be a type of string", function(){
			expect(enhancedDate.getDayName()).to.be.a('string');
		});

	});

	describe("getMonthName", function (){

		it("should return May if passed Date object as 05-14-2015", function(){
			expect(enhancedDate.getMonthName(new Date(2015, 4, 14))).to.equal("May");
		});

		it("should be a type of string", function(){
			expect(enhancedDate.getMonthName()).to.be.a('string');
		});		

	});

	describe("isToday", function (){

		it("should be a type of boolean", function () {
		      expect(enhancedDate.isToday()).to.be.a("boolean");
		});

		it("should return true if passed today Date object", function(){
			expect(enhancedDate.isToday(new Date())).to.be.true;
		});

		it("should return false if passed Date object as 05-14-2015", function(){
			enhancedDate.setDate(new Date(2015, 4, 14));
			expect(enhancedDate.isToday()).to.be.false;
		});

	});

	describe("isFuture", function (){

		var today = new Date();

		it("should be a type of boolean", function () {
		      expect(enhancedDate.isFuture()).to.be.a("boolean");
		});

		it('should return true if passed date set 2 days later from today',function(){		
			  // add 2 days from today as a future day
      		  enhancedDate.setDate(today.setTime( today.getTime() + 2 * 86400000 ));
      		  expect(enhancedDate.isFuture()).to.be.true;
		});

		it('should return false if passed date set 2 days ago from today',function(){			  			 
      		  enhancedDate.setDate(today.setTime( today.getTime() - 2 * 86400000 ));
      		  expect(enhancedDate.isFuture()).to.be.false;
		});

	});

});