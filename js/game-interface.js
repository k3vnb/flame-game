import { flame } from './../js/flames.js';

$(document).ready(function(){
  $('#go').click(function(event){
    // event.PreventDefault();
    flame.setGrowth();
    // $('#counter').empty().append(flame.flameLevel);
    setInterval(() => {$('#counter').empty().append(flame.flameLevel);
  }, 500);
  });
});
