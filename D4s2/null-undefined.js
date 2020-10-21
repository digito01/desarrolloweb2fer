let numberOne = 15;

// a^2 + b^2 = c^2
function pitagoras(a, b) {
    var a= a**2;
    var b= b**2;
    var c = a + b;
    console.log(Math.sqrt(c));
}
pitagoras(2,2);

function pitagoras2(a, b) {
    return Math.hypot(2, 2);
 
 }
 
 console.log(pitagoras2); 
