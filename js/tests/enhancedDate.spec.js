describe("enhancedDate", function() {
    
    describe("setDate", function() {
        
        it("should create new Date object for 4/14/2015", function(){
            enhancedDate.setDate(new Date(2015, 4, 14));
            expect(enhancedDate.getDate()).to.equal('Thursday');
        });
    });

    //set date test
    describe("getDayName", function() {
        
        it("should equal Thursday", function(){
            enhancedDate.setDate(new Date(2015, 4, 14));
            expect(enhancedDate.getDayName()).to.equal('Thursday');
        });
    });




});