describe("enhancedDate", function ()  {
  'use strict';
  var epoch = 1421832287101;
  var _date = new Date(epoch);
  var _cDate = new Date();
  var _future;
  describe("setDate", function () {

    it("Should instance of date", function () {
      expect(enhancedDate.setDate()).to.be.a("Date");
    });

    it("Should return epoch time: " + epoch, function () {
      expect(enhancedDate.setDate(_date).getTime()).to.be.equal(epoch);
    });
  });

  describe("getDate",function () {

    it("Should be typeof number", function () {
      expect(enhancedDate.getDate()).to.be.a("number");
    });

    it("Should be equal to epoch time: " + epoch, function () {
      expect(enhancedDate.getDate()).to.be.equal(epoch);
    });
  });

  describe("getDayName",function () {

    it("Should be typeof string", function () {
      expect(enhancedDate.getDayName()).to.be.a("string");
    });

    it("Should be equal to Wednesday", function () {
      expect(enhancedDate.getDayName()).to.be.equal("Wednesday");
    });

    it("Should not be equal to Saturday", function () {
      expect(enhancedDate.getDayName()).to.not.be.equal("Saturday");
    });
  });

  describe("getMonthName",function () {

    it("Should be typeof string", function () {
      expect(enhancedDate.getMonthName()).to.be.a("string");
    });

    it("Should be equal to January", function () {
      expect(enhancedDate.getMonthName()).to.be.equal("January");
    });

    it("Should not be equal to May", function () {
      expect(enhancedDate.getMonthName()).to.not.be.equal("May");
    });
  });

  describe("isToday",function () {

    it("Should be typeof boolean", function () {
      expect(enhancedDate.isToday()).to.be.a("boolean");
    });

    it("Should be " + epoch + " false", function () {
      expect(enhancedDate.isToday()).to.be.equal(false);
    });

    it("Should be " + _cDate.getTime() + " true", function () {
      enhancedDate.setDate(_cDate);
      expect(enhancedDate.isToday()).to.be.equal(true);
    });
  });

  describe("isFuture",function () {

    it("Should be typeof boolean", function () {
      expect(enhancedDate.isFuture()).to.be.a("boolean");
    });

    it("Should be " + _cDate.getTime() + " false", function () {
      expect(enhancedDate.isFuture()).to.be.equal(false);
    });

    _future = _cDate.getTime() + 100;
    it("Should be " + _future + " true", function () {
      enhancedDate.setDate(_future);
      expect(enhancedDate.isFuture()).to.be.equal(true);
    });
  });
});