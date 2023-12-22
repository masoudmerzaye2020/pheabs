   (function() {
  $("#range").slider({
    range: "min",
    min: 100.00,
    max: 500000,
    value: 50,
    slide: function(e, uie) {
      return $(".ui-slider-handle").html(uie.value); 
    }
  });

  $(".ui-slider-handle").html("500");

}).call(this); 


(function() {
  $("#month").slider({
    range: "min",
    min: 2,
    max: 60,
    value: 20,
    slide: function(e, ui) {
      return $(".ui-slider-handle").html(ui.value); 
    }
  });

  $(".ui-slider-handle").html("20");

}).call(this); 

/* 
$("#range").slider({
  range: 'min',
  min: 0,
  max: 2000000,
  step: 50000,
  values: 2000000,
  slide: function (event, ui) {
    return  $(".ui-slider-handle").html("£" + addCommas(ui.values[0].toString()));
  
  }
});

$(".ui-slider-handlee").html("£" + $("#range").slider("values", 0));



function addCommas(nStr)
{
nStr += '';
x = nStr.split('.');
x1 = x[0];
x2 = x.length > 1 ? '.' + x[1] : '';
var rgx = /(\d+)(\d{3})/;
while (rgx.test(x1)) {
  x1 = x1.replace(rgx, '$1' + ',' + '$2');
}
return x1 + x2;
} */