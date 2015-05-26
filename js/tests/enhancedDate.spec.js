describe("enhancedDate", function() {

    describe("getDayName", function() {
        
        it("should equal Thursday", function() {
            enhancedDate.setDate(new Date(2015, 4, 14));
            expect(enhancedDate.getDayName()).to.equal('Thursday');
        });

        it("should return a string", function () {
            expect(enhancedDate.getDayName()).to.be.a('string');
        });
    });

    describe("getMonthName", function() {
        
        it("should equal May", function(){
            enhancedDate.setDate(new Date(2015, 4, 14));
            expect(enhancedDate.getMonthName()).to.equal('May');
        });

        it("should return a string", function () {
            expect(enhancedDate.getMonthName()).to.be.a('string');
        });
    });

    describe("isToday", function() {
        
        it("should return true if given today's date", function(){
            enhancedDate.setDate();
            expect(enhancedDate.isToday()).to.be.true;
        });

        it("should return a boolean", function () {
            expect(enhancedDate.isToday()).to.be.a('boolean');
        });
    });

    describe("isFuture", function() {
        
        it("should return false if given today's date", function(){
            enhancedDate.setDate();
            expect(enhancedDate.isFuture()).to.be.false;
        });

        it("should return true if given a date from 3500 AD", function(){
            enhancedDate.setDate(new Date(3500, 1, 1));
            expect(enhancedDate.isFuture()).to.be.true;
        });

        it("should return a boolean", function () {
            expect(enhancedDate.isFuture()).to.be.a('boolean');
        });
    });

    describe('setDate', function() {
        it("should return an instance if passed new Date object", function() {
            expect(enhancedDate.setDate(new Date(2015, 1, 1))).to.be.instanceof(Date);
        });

        it("should  return a Date object if no date is passed", function() {
            expect(enhancedDate.setDate()).to.be.instanceof(Date);
        });

    });

    describe('getDate', function() {
        it("should return a number", function() {
            expect(enhancedDate.getDate()).to.be.a('number');
        });

        it("should return a Date object", function() {
            expect(enhancedDate.getDate(true)).to.be.instanceof(Date);
        })
    });

});