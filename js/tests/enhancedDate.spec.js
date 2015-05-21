/*
 * Homework 
 * JSCRIPT300-Spring2015/Module_6
 * by Diane Zevenbergen
 */

describe('Enhanced Date', function () {
    var setDate = enhancedDate.setDate;
    var getDate = enhancedDate.getDate;
    var getDayName = enhancedDate.getDayName;
    var getMonthName = enhancedDate.getMonthName;
    var isToday = enhancedDate.isToday;
    var isFuture = enhancedDate.isFuture;
        
    // setDate tests
    describe('setDate method', function () {

        it('should exist', function () {
            expect(setDate()).to.exist;
        });

        it('should be instanceOf Date', function () {
            expect(setDate()).is.an.instanceOf(Date);
        });
        
        // test .deep.equal with 5/14/2015
        it('matching dates should be deep equal', function () {
            expect(setDate(new Date(2015,4,14))).to.deep.equal(new Date('5/14/2015'));
        });

        // test that .deep.equal fails comparing 5/14/2015 to current day
        it('different dates should not be deep equal', function () {
            expect(setDate(new Date(2015,4,14))).to.not.deep.equal(new Date());
        });
    });
    
    // getDate tests
    describe('getDate method', function () {
        
        it('should exist', function () {
            expect(getDate()).to.exist;
        });
        
        // test that passing 'true' returns date obj
        it('passing "true" should return instanceOf Date', function () {
            expect(getDate(true)).is.an.instanceOf(Date);
        });
        
        // test that passing nothing returns number (Epoch ms)
        it('passing nothing should return a number', function () {
            expect(getDate()).to.be.a('Number');
        });
        
        // QUESTION:  is something like this too goofy for testing?
        // test that getTime of returned date obj equals returned Epoch ms
        it('getDate(true).getTime() should equal getDate()', function () {
            expect(getDate(true).getTime()).to.equal(getDate());
        });
    });

    // getDayName tests
    describe('getDayName method', function () {
        
        it('should return a string', function () {
            setDate();
            expect(getDayName()).to.be.a('String');
        });
        
        // set date to Thursday 5/14/15    
        it('date = 5/14/15 should return "Thursday"', function () {
            setDate(new Date(2015,4,14));
            expect(getDayName()).to.equal('Thursday');
        });

        // set erroneous date
        it('erroneous date should return undefined', function () {
            setDate(new Date('nonsense'));
            expect(getDayName()).to.not.exist;
        });

    });

    // getMonthName tests
    describe('getMonthName method', function () {
        
        it('should return a string', function () {
            setDate();
            expect(getMonthName()).to.be.a('String');
        });
        
        // set date to Thursday 5/14/15    
        it('date = 5/14/15 should return "May"', function () {
            setDate(new Date(2015,4,14));
            expect(getMonthName()).to.equal('May');
        });

        // set erroneous date
        it('erroneous date should return undefined', function () {
            setDate(new Date('nonsense'));
            expect(getMonthName()).to.not.exist;
        });
    });

    // isToday tests
    describe('isToday method', function () {
        
        it('should be boolean', function () {
            setDate();
            expect(isToday()).to.be.a('Boolean');
        });
        
        it('today\'s date should be true', function () {
            setDate();
            expect(isToday()).to.be.true;
        });

        it('old date should be false', function () {
            setDate(new Date(2015,4,14));
            expect(isToday()).to.not.be.true;
        });

        it('future date should be false', function () {
            setDate(new Date(2035,4,14));
            expect(isToday()).to.not.be.true;
        });

        // set erroneous date
        it('erroneous date should return false', function () {
            setDate(new Date('nonsense'));
            expect(isToday()).to.not.be.true;
        });
    });

    // isFuture tests
    describe('isFuture method', function () {

        it('should be boolean', function () {
            setDate();
            expect(isFuture()).to.be.a('Boolean');
        });
        
        it('today\'s date should be false', function () {
            setDate();
            expect(isFuture()).to.not.be.true;
        });

        it('old date should be false', function () {
            setDate(new Date(2015,4,14));
            expect(isFuture()).to.not.be.true;
        });

        it('future date should be true', function () {
            setDate(new Date(2035,4,14));
            expect(isFuture()).to.be.true;
        });
    });
    
    // Timing tests
    describe('Timing tests', function () {

        it('should be a fast test', function (done) {
            expect(setDate('6/1/2015')).is.an.instanceOf(Date);
            done();
        });
        
        it('should be a medium test', function (done) {
            setTimeout(function () {
                expect(setDate('6/1/2015')).is.an.instanceOf(Date);
                done();
            }, 40);
        });
        
        it('should be a timeout failure', function (done) {
            setTimeout(function () {
                expect(setDate('6/1/2015')).is.an.instanceOf(Date);
                done();
            }, 2001);
        }); 
    });
});

