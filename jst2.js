// third excesice


var a = +prompt("Enter the first number")
var b = +prompt("Enter the second number")
var c = +prompt("Enter the third number")

if (a<b && b<c || c<b && b<a) {
    alert("Average number " + b)
    console.log("Average number " + b);
}else if (a<c && c<b || b<c && c<a) {
    alert("Average number " + c)
    console.log("Average number " + c);
}else if(b<a && a<c || c<a && a<b) {
    alert("Average number " + a)
    console.log("Average number " + a);
}else{
    alert("not number")
}