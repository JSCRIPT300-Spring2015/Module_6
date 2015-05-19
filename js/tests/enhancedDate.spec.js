// suite description
describe('enhancedDate', function () {
  'use strict';

  describe('setDate',function(){

    it('should return date object set with today\'s date if 0 arguments passed',function(){
      expect(enhancedDate.setDate()).to.equalDate(new Date());
    });

    it('should return date object when argument of type Date is passed',function(){
      expect(enhancedDate.setDate(new Date(2015,1,1))).to.equalDate(new Date(2015,1,1));
    });
  });

  describe('getDate',function(){

    beforeEach(function(){
      enhancedDate.setDate(new Date());
    });

    it('Should return a number object if 0 arguments passed',function(){
       expect(enhancedDate.getDate()).to.be.a('Number');
    });

    it('should return date object if argument passed is true',function(){
      expect(enhancedDate.getDate(true) instanceof Date).is.ok;
    });
  });

   describe('getDayName', function () {

    it('should return Thursday when date is set to 5/14/2015', function () {
      enhancedDate.setDate(new Date(2015,4,14));
      expect(enhancedDate.getDayName()).to.equal('Thursday');
    });

    it('should return type string', function () {
      enhancedDate.setDate(new Date(2015,4,16));
      expect(enhancedDate.getDayName()).to.be.a('string');
    });
  });

  describe('getMonthName',function(){

    it('should return May when date is set to 5/14/2015',function(){
      enhancedDate.setDate(new Date(2015,4,14));
      expect(enhancedDate.getMonthName()).to.equal('May');
    });

    it('should return type string', function () {
      enhancedDate.setDate(new Date(2015,3,16));
      expect(enhancedDate.getMonthName()).to.be.a('string');
    });
  });

  describe('isToday',function(){

    it('should return true if date object set to today\'s date is passed in',function(){
      enhancedDate.setDate(new Date());
      expect(enhancedDate.isToday()).is.ok;
    });

    it('should return false if date object not set to today\'s date is passed in',function(){
      enhancedDate.setDate(new Date(2015,1,1));
      expect(enhancedDate.isToday()).is.not.ok;
    });
  });

  describe('isFuture',function(){

    it('should return true if date set in future is passed in',function(){
      enhancedDate.setDate(new Date(2020,1,1));
      expect(enhancedDate.isFuture()).is.ok;
    });

    it('should return false if date set to today is passed in',function(){
      enhancedDate.setDate(new Date());
      expect(enhancedDate.isFuture()).is.not.ok;
    });

    it('should return true if date set in past is passed in',function(){
      enhancedDate.setDate(new Date(2013,1,1));
      expect(enhancedDate.isFuture()).is.not.ok;
    });
  });
});