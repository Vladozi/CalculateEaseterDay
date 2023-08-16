//         var N = prompt('type year')
//            var a  = N % 19;
//         var b = N % 4;
// var c = N %7;
// var d =(19*a +15) % 30;
// var e =(2*b+4*c+6*d+6) % 7;
// f = d + e;
// var result =document.getElementById('date')
//  function EasterDay() {

// if(f<=26&&N<2022){
//   result.textContent = N+' წელს აღდგომა იყო'+ ' '+ (f+4) +' '+  'აპრილს'
// }else if(f<=26&&N>=2022){
//   result.textContent = N+' წელს აღდგომა იქნება'+ ' '+ (f+4) +' '+  'აპრილს'
// }
//  if(f>26 &&N>=2022){
//   result.textContent = N+' წელს აღდგომა იქნება'+ ' '+ (f-26) +' '+  'მაისს'
//  }else if(f>26&&N<2022){
//   result.textContent = N+' წელს აღდგომა იყო'+ ' '+ (f-26) +' '+  'მაისს'
//  }
// }
// EasterDay();

var btn =document.getElementById('btn')
btn.addEventListener("click" ,function(){
  var N =document.getElementById('inp').value;
           var a  = N % 19;
        var b = N % 4;
var c = N %7;
var d =(19*a +15) % 30;
var e =(2*b+4*c+6*d+6) % 7;
f = d + e;
var result =document.getElementById('date');

if(f<=26&&N<2022){
  result.value = (f+4)+' '+'April'
}else if(f<=26&&N>=2022){
  result.value = (f+4)+' '+ 'april'
}
 if(f>26 &&N>=2022){
  result.value = (f-26)+' '+'May'
 }else if(f>26&&N<2022){
  result.value = (f-26)+' '+'May'
 }

     
})
