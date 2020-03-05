// This is a JavaScript file

function calcular(){

var v1 = document.querySelector('')

}

$(document).on('click','#mais', function() {
  var v1= $('input#v1').value();
  var v2= $('input#v2').value();
 var v3= $('input#v3').value();

  var v4= parseFloat(v1) * parseFloat(v3) / parseFloat(v2)
  document.getElementById('result').innerHTML = v4;
});


