describe("enhancedDate", function ()  {
  'use strict';

  describe("setDate", function () {

    it("Should instance of date", function () {
      expect(enhancedDate.setDate(new Date(2015, 4, 23))).to.be.a("Date");
    });

    it("Should return: " + (new Date(2015, 4, 23)), function () {
      expect(enhancedDate.setDate(new Date(2015, 4, 23))).to.be.deep.equal(new Date(2015, 4, 23));
    });
  });

  describe("getDate",function () {

    it("Should be typeof number", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.getDate()).to.be.a("number");
    });

    it("Should be equal to: " + (new Date(2015, 4, 23)), function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.getDate()).to.be.equal((new Date(2015, 4, 23)).getTime());
    });
  });

  describe("getDayName",function () {

    it("Should be typeof string", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.getDayName()).to.be.a("string");
    });

    it("Should be equal to Wednesday", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.getDayName()).to.be.equal("Saturday");
    });

    it("Should not be equal to Saturday", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.getDayName()).to.not.be.equal("Monday");
    });
  });

  describe("getMonthName",function () {

    it("Should be typeof string", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.getMonthName()).to.be.a("string");
    });

    it("Should be equal to April", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.getMonthName()).to.be.equal("May");
    });

    it("Should not be equal to May", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.getMonthName()).to.not.be.equal("April");
    });
  });

  describe("isToday",function () {

    it("Should be typeof boolean", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.isToday()).to.be.a("boolean");
    });

    it("Should be " + (new Date(2015, 4, 23)) + " false", function () {
      enhancedDate.setDate(new Date(2015, 4, 23));
      expect(enhancedDate.isToday()).to.be.equal(false);
    });

    it("Should be " + (new Date()) + " true", function () {
      enhancedDate.setDate(new Date());
      expect(enhancedDate.isToday()).to.be.equal(true);
    });
  });

  describe("isFuture",function () {

    it("Should be typeof boolean", function () {
      expect(enhancedDate.isFuture()).to.be.a("boolean");
    });

    it("Should be " + (new Date()).getTime() + " false", function () {
      enhancedDate.setDate(new Date());
      expect(enhancedDate.isFuture()).to.be.equal(false);
    });

    it("Should be " + ((new Date()).getTime() + 500) + " true", function () {
      enhancedDate.setDate((new Date()).getTime() + 500);
      expect(enhancedDate.isFuture()).to.be.equal(true);
    });
  });
});