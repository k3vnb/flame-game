import { flame } from './../js/flames.js';

$(document).ready(function(){
  $('#go').click(function(event){
    // event.PreventDefault();
    flame.setGrowth();
    setInterval(() => {$('#counter').empty().append(flame.flameLevel);
    // $('.container').append(`<div id="fire"></div>`);
    }, 500);
  });

  $('#match').click(function(event){
    flame.gasSmall();
  });

  $('#glass').click(function(event){
    flame.waterSmall();
  });
});
