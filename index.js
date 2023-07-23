var r1=Math.random();
r1=r1*6;
r1=r1+1;
var r1=Math.floor(r1);

var r2=Math.random();
r2=r2*6;
r2=r2+1;
var r2=Math.floor(r2);
var d1="images/dice"+r1+".png";
var d2="images/dice"+r2+".png";

document.querySelectorAll("img")[0].setAttribute("src",d1);

document.querySelectorAll("img")[1].setAttribute("src",d2);



if(r1>r2)
document.getElementsByTagName("h1")[0].innerHTML="Winner is 1";
else if(r2>r1)
document.getElementsByTagName("h1")[0].innerHTML="Winner is 2";
else
if(r1=r2)
document.getElementsByTagName("h1")[0].innerHTML="Match tied";

