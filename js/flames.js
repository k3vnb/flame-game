export let flame = {
  flameLevel: 25,
  setGrowth: function() {
    const growthInterval = setInterval(() => {
      this.flameLevel++;
      if (this.didYouGetBurned() == true) {
        clearInterval(growthInterval);
        return "You burned up!";
      }
    }, 1000);
  },
  didYouGetBurned: function() {
    if (this.flameLevel < 100) {
      return false;
    } else {
      return true;
    }
  },
  douse: function(amount) {
    let that = this;
    return function(water) {
      that.flameLevel -= amount
      return `You doused that flame with the ${water}! Flame level decreased by ${amount} percent`
    }
  }

}; //end of export let flame

flame.waterSmall = flame.douse(5);
flame.waterMed = flame.douse(10);
flame.gasLg = flame.douse(-20);
