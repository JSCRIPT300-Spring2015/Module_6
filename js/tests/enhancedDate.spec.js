/* Write unit tests for the included enhancedDate module. You will write at least two tests for each of the six interface functions. Each of these methods returns a value, so you should have one test for each that validates that return value . Unit tests should be predictable, meaning you will need to do some setup to create a predictable outcome. 

example (feel free to use this for one of your tests):

1. create a new Date object to set your date with: enhancedDate(new Date(2015, 4, 14));
2. validate that enhancedDate.getDayName() is equal to 'Thursday'

Other types of tests to consider: 
checking the type of the return value
for a function with a boolean return value, the expected return value matches for both possible conditions
for a function that takes a value and should return the same value, that the values match

Because not all of the methods you're testing will require the same setup, you will want to do the setup step inside the spec function itself (the it() method). Refer to the examples of different types of Chai assertions from the slide deck to help construct your tests.
*/


// suite description
describe("enhancedDate", function () {
    
    // don't need to test the constructor specifically, function initDate() {
    
    // tests for function setDate(date) {
    describe('setDate', function () {
        it("should return a date", function () {
        
            // using Chai's expect to assert if this is true/false
            expect(enhancedDate.setDate()).to.be.an.instanceOf(Date);
        });

        it("should return a date that is passed in", function () {
        
            // using Chai's expect to assert if this is true/false
            // remember: Date (year, month # starting with Jan == 0, day)
            expect(enhancedDate.setDate(new Date(2015, 6, 2))).to.be.deep.equal(new Date(2015, 6, 2));
        });
    });
        
    //	function getDate(returnObj) {
    describe('getDate', function () {
                
        it("should return a number if nothing is passed in", function () {
            expect(enhancedDate.getDate()).to.be.a('number');
        });
        
        it("should return a Date object if true is passed in", function () {
            expect(enhancedDate.getDate(true)).to.be.an.instanceOf(Date);
        });
    });
    
    
    //	function getDayName() {
    describe('getDayName', function () {
        
        before (function () {
            // remember: Date (year, month # starting with Jan == 0, day), so this is May 31, 2015
            enhancedDate.setDate(new Date(2015, 4, 31));
        });
        
        it("should return a string", function () {
            expect(enhancedDate.getDayName()).to.be.a('string');
        });
        
        it("should return 'Sunday'", function () {
            expect(enhancedDate.getDayName()).to.equal('Sunday');
        });
    });
        
    //	function getMonthName() {
    describe("getMonthName", function () {
        before (function () {
            // remember: Date (year, month # starting with Jan == 0, day) so this is June 2, 2015
            enhancedDate.setDate(new Date(2015, 5, 2));
        });
        
        it("should return a string", function () {
            expect(enhancedDate.getMonthName()).to.be.a('string');
        });
        
        it("should return 'June'", function () {
            expect(enhancedDate.getMonthName()).to.equal('June');
        });
        

    });
    
    //	function isToday() {
    describe("isToday", function () {
            
        before (function () {
            // remember: Date (year, month # starting with Jan == 0, day) so this is June 2, 2015
            // set a past date so it will never equal today
            enhancedDate.setDate(new Date(2015, 5, 2));
        });
        
        it("should return a boolean", function () {
            expect(enhancedDate.isToday()).to.be.a('boolean');
        });
        
        it("should return not equals today", function () {
            expect(enhancedDate.isToday()).to.not.equal(new Date());
        });
        
        before (function () {
            // remember: Date (year, month # starting with Jan == 0, day) so this is June 2, 2015
            // set a past date so it will never equal today
            enhancedDate.setDate(new Date());
        });
        
        it("should return equals today", function () {
            expect(enhancedDate.isToday()).to.equal(true);
        });

    });
    
//	function isFuture() {
    describe("isFuture", function () {
            
        before (function () {
            // remember: Date (year, month # starting with Jan == 0, day) so this is June 2, 3000
            // set a future date so it will return true
            enhancedDate.setDate(new Date(3000, 5, 2));
        });
    
        it("should return a boolean", function () {
            expect(enhancedDate.isFuture()).to.be.a('boolean');
        });
        
        it("should return false, it is not the future", function () {
            expect(enhancedDate.isFuture()).to.not.equal(new Date());
        });
        
        it("should return true, it is the future", function () {
            expect(enhancedDate.isFuture()).to.deep.equal(true);
        });
    });

});