// suite description
describe('enhancedDate', function () {
  'use strict';

  describe('setDate',function(){

    it('should return date object set with today\'s date if 0 objects passed',function(){
      expect(enhancedDate.setDate().toString()).to.equal(new Date().toString());
    });

    it('should return date object set with given date object that is passed',function(){
      expect(enhancedDate.setDate(new Date(2015,1,1)).toString()).to.equal(new Date(2015,1,1).toString());
    });
  });

  describe('getDate',function(){

    it('should return date object set with today\'s date if 0 objects passed',function(){
      //expect(enhancedDate.setDate().toString()).to.equal(new Date().toString());
    });

    it('should return date object set with given date object that is passed',function(){
      //expect(enhancedDate.setDate(new Date(2015,1,1)).toString()).to.equal(new Date(2015,1,1).toString());
    });
  });

   describe('getDayName', function () {

    it('should return Thursday when date is set to 5/14/2015', function () {
      enhancedDate.setDate(new Date(2015,4,14));
      expect(enhancedDate.getDayName()).to.equal('Thursday');
    });

    it('should return Saturday when date is set to 5/16/2015', function () {
      enhancedDate.setDate(new Date(2015,4,16));
      expect(enhancedDate.getDayName()).to.equal('Saturday');
    });

    it('should not return Monday when date is set to 2/1/2015', function () {
      enhancedDate.setDate(new Date(2015,1,1));
      expect(enhancedDate.getDayName()).to.not.equal('Monday');
    });
  });

  describe('getMonthName',function(){

    it('should return May when date is set to 5/14/2015',function(){
      enhancedDate.setDate(new Date(2015,4,14));
      expect(enhancedDate.getMonthName()).to.equal('May');
    });

    it('should return April when date is set to 4/16/2015', function () {
      enhancedDate.setDate(new Date(2015,3,16));
      expect(enhancedDate.getMonthName()).to.equal('April');
    });

    it('should not return January when date is set to 2/1/2015', function () {
      enhancedDate.setDate(new Date(2015,1,1));
      expect(enhancedDate.getMonthName()).to.not.equal('Janurary');
    });
  });

  describe('isToday',function(){

    it('should return true if date is set to today\'s date',function(){
      enhancedDate.setDate(new Date());
      expect(enhancedDate.isToday()).is.ok;
    });

    it('should return false if date is not set to today\'s date',function(){
      enhancedDate.setDate(new Date(2015,1,1));
      expect(enhancedDate.isToday()).is.not.ok;
    });
  });

  describe('isFuture',function(){

    it('should return true if date is set in future',function(){
      enhancedDate.setDate(new Date(2016,1,1));
      expect(enhancedDate.isFuture()).is.ok;
    });

    it('should return false if date is set to today',function(){
      enhancedDate.setDate(new Date());
      expect(enhancedDate.isFuture()).is.not.ok;
    });

    it('should return true if date is set in past',function(){
      enhancedDate.setDate(new Date(2013,1,1));
      expect(enhancedDate.isFuture()).is.not.ok;
    });
  });
});