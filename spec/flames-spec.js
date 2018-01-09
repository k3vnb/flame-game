import { flame } from './../js/flames.js';

describe('HotFlame', function() {
  let burn = flame;

  beforeEach(function() {
    jasmine.clock().install();
    burn.flameLevel = 25;
    burn.name = "Mr. Burns";
    burn.setGrowth();

  }); // of of beforeEach

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name & flame level of 25 upon creation', function() {
    expect(burn.name).toEqual("Mr. Burns");
    expect(burn.flameLevel).toEqual(25);
  });

  it('should have a flameLevel of 30 after 5001 milliseconds', function() {
    jasmine.clock().tick(5001);
    expect(burn.flameLevel).toEqual(30);
  });

  it('should be consumed in flames if flameLevel goes above 100', function() {
    burn.flameLevel = 100;
    expect(burn.didYouGetBurned()).toEqual(true);
  });
  it('should be see faster growth', function() {
    burn.flameLevel = 51;
    expect(burn.isTimeAlmostUp()).toEqual(true);
  });

  it('should be consumed in flames if 75 seconds go by', function() {
    jasmine.clock().tick(75001);
    expect(burn.didYouGetBurned()).toEqual(true);
  });

  it('should return that the fire was somewhat extinguished and the flameLevel should go down by 5', function() {
    expect(burn.waterSmall("cup of water")).toEqual("You doused that flame with the cup of water! Flame level decreased by 5 percent");
    expect(burn.flameLevel).toEqual(20);
  });

  it('should change the growth rate to 500ms once the flameLevel reaches 51', function() {
    // jasmine.clock().tick(5001);
    // expect(burn.interval).toEqual(1000);
    burn.flameLevel = 55;
    expect(burn.interval).toEqual(500);
  });

}); //end of describe('Hot Flame' function)
