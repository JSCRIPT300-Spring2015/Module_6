describe("enhancedDate", function () {


    beforeEach(function () {

    });


    describe("With 'newDate(2015,4,14)' - Tests for functions: getDayName(), getMonthName, isToday, isFuture", function () {
        var enDate = enhancedDate;


        //it("Uninitialized date should be initialized to today", function() {
        //    enDate.setDate();
        //    expect(enDate.isToday()).to.be.equal(true);
        //});

        enDate.setDate(new Date(2015, 4, 14));

        /**
         * BDD style testing make the test's purpose obvous
         * by reading like natural language
         */
        // Check getDate() return formats
        it("should return normal date format with getDate(true)", function() {
            expect(enDate.getDate(true)).to.be.a("Date");
        });

        it("should be in apoche milliseconds with getDate()", function() {
            expect(enDate.getDate()).to.be.a("number");
        });

        // Checking getDayName()
        it("getDayName() is a string type", function() {
            expect(enDate.getDayName()).to.be.a("string");
        });

        it("should be Thursday", function () {
            // Use getDayName to test it out
            expect(enDate.getDayName()).to.be.equal("Thursday");
        });

        // Checking getMonthName()
        it("getMonthName() is string type", function() {
           expect(enDate.getMonthName()).to.be.a("string");
        });

        it("should be May", function() {
            // Use getMonthName to test it out
            expect(enDate.getMonthName()).to.be.equal("May");
        });

        // Checking isToday()
        it("isToday() is a boolean type", function() {
            expect(enDate.isToday()).to.be.a("boolean");
        });

        it("should not be today", function() {
            // Use isToday to test it out
            expect(enDate.isToday()).to.not.be.equal(true);
        });

        // Checking isFuture()
        it("isFuture() is a boolean type", function() {
            expect(enDate.isFuture()).to.be.a("boolean");

        })
        it("should not be future", function() {
            // Use isFuture to test it out
            expect(enDate.isFuture()).to.not.be.equal(true);
        });

        // Checking setDate(number)
        it("set apoche time 12345 to setDate()", function() {
            var oDate = enhancedDate.setDate(12345);

            console.log(oDate.getTime());
            expect(oDate.getTime()).to.be.equal(12345);
        });



    });

    describe("Tests for ")




});