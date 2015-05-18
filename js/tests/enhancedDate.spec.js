//suite description
describe("Enhanced Date", function (){
var testDate = enhancedDate.setDate(new Date(2015, 5, 30)); 
    
//  var enhancedDate;
//  
//  beforeEach(function () {
//      enhancedDate = new enhancedDate();
//  });

//Get Day Name Test  
  describe("Get Day Name", function(){
    
      it("should be a string and should return Tuesday", function(){
          expect(enhancedDate.getDayName(testDate)).to.be.a("string").and.to.equal("Tuesday");
      });
  });


//Get Month Name Test  
  describe("Get Month Name", function(){
    
      it("should be a string and should return June", function(){
          expect(enhancedDate.getMonthName(testDate)).to.be.a("string").and.to.equal("June");
      });
  });


//Is Today Test  
  describe("Is Today", function(){
    
      it("testDate should not be a string and should return false ", function(){
          expect(enhancedDate.isToday(testDate)).to.not.be.an("string").and.to.not.be.true;
      });
    
//      it("should not be a string ", function(){
//          expect(enhancedDate.isToday(testDate)).to.not.be.an("string");
//      });
        
  });


//Is Future Test 
  describe("Is Future", function(){ 

      it("testDate should return true", function(){
          expect(enhancedDate.isFuture(testDate)).to.be.true;
      });
    
      it("should not be a string ", function(){
          expect(enhancedDate.isFuture(testDate)).to.not.be.an("string");
      });
      
  });


//Get Date Test  
  describe("Get Date", function(){
      it("should return true that it is an instance of Date", function(){
          expect(enhancedDate.getDate(testDate)).is.an.instanceof(Date);
      });
    
      it("should return true that it is not a Boolean", function(){
          expect(enhancedDate.getDate(testDate)).to.not.be.an("boolean");
      });
    
  });


//Set Day Test  
  describe("Set Day", function(){
    
      it("should return true that it is an instance of Date", function(){
          expect(enhancedDate.setDate(testDate)).is.an.instanceof(Date);
      });
      
      it("should return true that it is not a Boolean", function(){
          expect(enhancedDate.getDate(testDate)).to.not.be.an("number");
      });  
  });
  
});