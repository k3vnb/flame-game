import { flame } from './../js/flames.js';

$(document).ready(function(){
  $('#go').click(function(event){
    // event.PreventDefault();
    flame.setGrowth();
    setInterval(() => {
      $('#counter').empty().append(flame.flameLevel);
      let visualFlame = flame.flameLevel * 20;
      console.log(visualFlame + "vs");
      $('#fire').empty().css("height", visualFlame);
      $('#fire').empty().css("width", visualFlame);
    }, 500);
  });

  $('#match').click(function(event){
    flame.gasSmall();
  });

  $('#glass').click(function(event){
    flame.waterSmall();
  });
});
