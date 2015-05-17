
//Brian Forcum, Module_6 Homework

describe("enhancedDate", function () {
    
    'use strict';

    describe("setDate", function () {
    
        beforeEach(function () {
                enhancedDate.setDate(new Date(2015, 4, 14));
            });

        it("Should be an instance of Date", function () {
           expect(enhancedDate.setDate()).is.an.instanceof(Date);
        });

        it("Should not return null", function () {
            expect(enhancedDate.setDate()).not.to.equal(null);
        });

    });

    describe("getDate", function () {
        var currentDate;

        beforeEach(function () {
                enhancedDate.setDate(new Date());
                currentDate = new Date().getTime();
               });

        it("Should have a type of 'number'", function () {
            expect(enhancedDate.getDate()).is.a("number");
        });

        it("Should be equal to current date", function () {
            expect(enhancedDate.getDate()).to.equal(currentDate);
        });
    });

    describe("getDayName", function () {
        
        beforeEach(function () {
                enhancedDate.setDate(new Date(2015, 4, 14));
               });

        it("Should equal 'Thursday'", function () {

           expect(enhancedDate.getDayName()).to.equal('Thursday'); 
        });

        it("Should return a string value", function() {
            expect(enhancedDate.getDayName()).to.be.a("string");
        });
    });

    describe("getMonthName", function () {
    
        beforeEach(function () {
            enhancedDate.setDate(new Date(2014, 1, 19));
        });

        it("Should return 'January'", function () {
            expect(enhancedDate.getMonthName()).to.equal("January");
        });

        it("Should not return a number", function () {
            expect(enhancedDate.getMonthName()).is.not.a("number");
        });
        it("Should return a string", function () {
            expect(enhancedDate.getMonthName()).to.be.a("string");
        });
    });
    
    describe("isToday", function () {
        var currentDate;
        var pastDate;
        
        
        beforeEach(function () {
            enhancedDate.setDate();
            currentDate = new Date().getTime();
            pastDate = new Date(2013, 2, 24).getTime();
         });
        
        it("Should return 'true'", function () {
            expect(enhancedDate.isToday()).to.equal(true);
        });
        
        it("Should return same value as (new Date.getTime())", function () {
            expect(enhancedDate.getDate()).to.equal(currentDate);
        });
        it("Should be a boolean comparison", function () {
            expect(enhancedDate.isToday()).to.be.a("boolean");
        });
        it("Should be greater than pastDate", function () {
            expect(enhancedDate.getDate()).to.be.above(pastDate);
        });
        
    });

    describe("isFuture", function () {
    
        beforeEach (function () {
            enhancedDate.setDate(new Date(2015, 7, 7));
        });

        it("Should return 'true'", function () {
            expect(enhancedDate.isFuture()).to.equal(true);
        });

        it("Should be a boolean comparison", function () {
            expect(enhancedDate.isFuture()).to.be.a("boolean");
        });
    });
    
 });