export let flame = {
  flameLevel: 25,
  interval: 1000,

  setGrowth: function() {
    let growthInterval = setInterval(() => {
      this.flameLevel++;
      if (this.didYouGetBurned() == true) {
        clearInterval(growthInterval);
        return "You burned up!";
      }
    }, this.interval);
  },
  didYouGetBurned: function() {
    if (this.flameLevel < 100) {
      return false;
    } else {
      return true;
    }
  },
  isTimeAlmostUp: function() {
    if (this.flameLevel < 50) {
      return false;
    } else {
      return true;
    }
    // if (this.isTimeAlmostUp() == true) {
    //   clearInterval(growthInterval);
    //   this.interval = this.interval/2;
    // };
  },
  douse: function(amount) {
    let that = this;
    return function(water) {
      that.flameLevel -= amount;
      return `You doused that flame with the ${water}! Flame level decreased by ${amount} percent`;
    };
  },


}; //end of export let flame

flame.waterSmall = flame.douse(5);
flame.waterMed = flame.douse(10);
flame.waterLg = flame.douse(15);
flame.gasSmall = flame.douse(-7);
flame.gasMed = flame.douse(-12);
flame.gasLg = flame.douse(-20);
