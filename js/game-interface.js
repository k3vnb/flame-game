import { flame } from './../js/flames.js';



$(document).ready(function(){
  // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=HmHytKPPqekN8wzQvW62yL0e0veY8dgC&limit=5");
  // xhr.done(function(data) { console.log("success got data", data); });
  // $('.jumbotron').css("background-image", `url( ${xhr})`);
  $('#go').click(function(event){
    // event.PreventDefault();
    flame.setGrowth();
    let flameGrow = setInterval(() => {
      $('#counter').empty().append(flame.flameLevel);
      let visualFlame = flame.flameLevel / 3;
      console.log(visualFlame + "vs");
      $('#fire').empty().css("transform", `scale(${visualFlame})`);
      if (flame.flameLevel > 99) {
        clearInterval(flameGrow);
        $('.visual').hide();
        $('.game-over').show();
      }
    }, 500);
  });

  $('#match').click(function(event){
    flame.gasSmall();
  });

  $('#glass').click(function(event){
    flame.waterSmall();
  });
});
