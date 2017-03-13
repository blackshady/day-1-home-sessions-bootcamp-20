'use strict';

describe("Test OOP Concepts", function() {
  describe("Case for base object Human", function() {
    it("should be defined for a new object", function() {
      expect(human).toBeDefined();
    });

    it("should return `undefined` for property gender", function() {
      expect(human.gender).toBeUndefined();
    });
    
    it("should return a value for property name", function() {
      expect(human.name).toBeDefined();
    });
    
    it("should return `Jane` for property name", function() {
      expect(human.name).toEqual('Jane');
    });
    
    it("should return a value for property age", function() {
      expect(human.age).toBeDefined();
    });
    
    it("should return `25` for property age", function() {
      expect(human.age).toEqual(25);
    });

    it("should return `Yippee` for method shout", function() {
      expect(human.shout()).toEqual('Yippee');
    });
  });

  describe("Case for object Male", function() {
    it("should be defined for a new object", function() {
      expect(male).toBeDefined();
    });

    it("should return `male` for property gender", function() {
      expect(male.gender).toDefined();
    });
    
    it("should return a value for property name", function() {
      expect(male.name).toBeDefined();
    });
    
    it("should return `Kiyosaki` for property name", function() {
      expect(male.name).toEqual('Kiyosaki');
    });
    
    it("should return a value for property age", function() {
      expect(male.age).toBeDefined();
    });
    
    it("should return `Jane` for property age", function() {
      expect(male.age).toEqual(25);
    });

    it("should return `Yeah!!!` for method shout", function() {
      expect(male.shout()).toEqual('Yeah!!!');
    });
  });
});