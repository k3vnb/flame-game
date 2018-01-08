export let bear = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  }
};

bear.eatSmall = bear.feed(5);



// // export class HungryBear {
// export let bear = {
//   foodLevel: 10;
//   setHunger: function() {
//     const hungerInterval = setInterval(() => {
//       this.foodLevel--;
//       if (this.didYouGetEaten() == true) {
//         clearInterval(hungerInterval);
//         return "You got eaten!";
//       }
//     }, 1000);
//   },
//
//   didYouGetEaten: function() {
//     if(this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   },
//
//   feed: function(amount) {
//     let that = this;
//     return function(food){
//       that.foodLevel += amount;
//       return `The bear at the ${food}! Food level goes up ${amount}!`
//     }
//   }
// };

// function welcome(salutation) {
//   return function(yourName) {
//     return `${salutation}! Nice to meet you, ${yourName}!`
//   }
// }
//
// let heyThere = welcome("Hey there");
//
// function()
