const a=1, b=3, c=2;
var x1,x2;
var d = b*b-4*a*c;
if (d>0) {
x1 = (-b+Math.sqrt(d))/(2*a);
x2 = (-b-Math.sqrt(d))/(2*a);
document.write(x1);
document.write(x2);
 }
else {
 document.write("imagine");
 }
 