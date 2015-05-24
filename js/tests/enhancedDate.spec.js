//  Patrice Briggs
//  Homework Module 6

//test suite for enhancedDate function
describe("enhancedDate", function () {    
    'use strict';

    //test setDate function
    describe("setDate", function () {
        it("should return a new Date Object if nothing passed in", function () {
        	expect(enhancedDate.setDate()).to.be.instanceOf(new Date());
        });
        it("should return Date object of 2015,6,4 when this is passed in", function () {
        	expect(enhancedDate.setDate(new Date(2015,6,4))).to.deep.equal(new Date(2015,6,4));
        });

    });

    //test getDate function
    describe("getDate", function () {
         
        beforeEach(function () {
            enhancedDate.setDate();
        });

        it("should return a number if nothing is passed in", function () {
        	expect(enhancedDate.getDate()).to.be.a('Number');
        });

        it("should return a Date object if true is passed in", function () {
            expect(enhancedDate.getDate(true)).to.be.instanceOf(Date) // should this be instanceOf?
        });
    });

    // test getDayName function
    describe("getDayName", function() {

        var myDate = enhancedDate.setDate(new Date(2015, 6, 4));
 
        it("should return a string", function () {
            expect(enhancedDate.getDayName(myDate)).to.be.a("String");
        });

        it("should return Saturday for 7/4/2015", function () { 
            expect(enhancedDate.getDayName(myDate)).to.equal("Saturday");
        }); 
    });
    
    // test getMonthName function
    describe("getMonthName", function () {

        var myDate = enhancedDate.setDate(new Date(2015, 6, 4));
              
        it("should return a string", function () {
            expect(enhancedDate.getMonthName(myDate)).to.be.a("String");
        });

        it("should return July for 7/4/2015", function () {  
        	myDate = enhancedDate.setDate(new Date(2015, 6, 4));
            expect(enhancedDate.getMonthName(myDate)).to.equal("July");
        });
    });

    // test isToday function
    describe("isToday", function () {

        it("should return false for 7/4/2015 unless test is run on that day", function () {
			enhancedDate.setDate(new Date(2015, 6, 4));
			expect(enhancedDate.isToday()).to.be.false;
		});
		it("should return true", function () {
			enhancedDate.setDate(new Date());
			expect(enhancedDate.isToday(new Date())).to.be.true;
		});

    // test isFuture function
    describe("isFuture", function () {
    	it("should return false", function () {
            enhancedDate.setDate(new Date(2015,0,1));
            expect(enhancedDate.isFuture()).to.be.false;
    	});

    	it("should return true unless test run after 12/31/2015", function () {
            enhancedDate.setDate(new Date(2015,11,31));
            expect(enhancedDate.isFuture()).to.be.true;
    	});

    });
});
});