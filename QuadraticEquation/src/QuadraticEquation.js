var a = 2;
var b = 9;
var c = 4;

var discriminant = b * b - 4 * a * c;
if (discriminant < 0) {
    console.log("Корней нет");
} else {
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    if (x1 === x2) {
       console.log("Корень уравнения x1=x2= " + x1);
    } else {
        console.log("Корень уравнения x1= " + x1);
        console.log("Корень уравнения x2= " + x2);
    }
}