describe("enhancedDate Test", function () {

    describe("Testing setDate method", function () {
        it("should be an instance of a Date object", function () {
            expect(enhancedDate.setDate()).is.an.instanceof(Date);
        });
        it("should equal to now", function () {
            expect(enhancedDate.setDate().getTime()).to.deep.equal(Date.now());
        });        
    });
    
    describe("Testing getDate method", function() {
        it("should have type number", function () {
            expect(enhancedDate.getDate()).to.be.a("number");
        });
        it("should be close to NOW in milliseconds", function () {
            expect(enhancedDate.getDate()).to.be.closeTo(Date.now(), 10);
        });
        it("should be an instance of Date object", function () {
            expect(enhancedDate.getDate(new Date())).is.an.instanceof(Date);
        });
    }); 
    
    describe("Testing getDayName method", function() {
        beforeEach(function () {
            date = enhancedDate.setDate(new Date(2015, 4, 25));  //monday Labourday 2015
        });        
        it("should be Monday labour day 2015", function () {
            expect(enhancedDate.getDayName()).to.be.equal("Monday");
        });
        it("should always be type string", function () {
            expect(enhancedDate.getDayName()).to.be.a("string");
        });
    });
    
    describe("Testing getMonthName method", function() {
        beforeEach(function () {
            date = enhancedDate.setDate(new Date(2015, 0, 30));  //month 0 = January
        });        
        it("should be January 2015", function () {
            expect(enhancedDate.getMonthName()).to.be.equal("January");
        });
        it("should always be type string", function () {
            expect(enhancedDate.getMonthName()).to.be.a("string");
        });
    });
    
    describe("Testing isToday method", function() {
        beforeEach(function () {
            date = enhancedDate.setDate(Date.now());  //set time to NOW
        });        
        it("should always return true since now is today", function () {
            expect(enhancedDate.isToday()).to.be.equal(true);
        });
        it("should always be type boolean", function () {
            expect(enhancedDate.isToday()).to.be.a("boolean");
        });
    });
    
    describe("Testing isToday method", function() {
        beforeEach(function () {
            date = enhancedDate.setDate(0);  //set time in millisecond 0 (1970)
        });        
        it("should always return false, 1970 is not future", function () {
            expect(enhancedDate.isFuture()).to.be.equal(false);
        });
        it("should always be type boolean", function () {
            expect(enhancedDate.isFuture()).to.be.a("boolean");
        });
    });
    
});