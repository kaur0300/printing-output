//TASK 1
var output,a,b,c;
a = 3;
b = 5;

output = "var a = 3;\n var b = 5;\n var c;\n--------------\n " +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "(a += b ): " + (a += b) + "\n" +
    "(a -= b ): " + (a -= b) + "\n" +
    "(a *= b ): " + (a *= b) + "\n" +
    "(a /= b ): " + (a /= b) + "\n" +
    "(a %= b ): " + (a %= b) + "\n" +
    "(a == b): " + (a == b) + "\n" +
    "(a != b): " + (a != b) + "\n" +
    "(a > b): " + (a > b) + "\n" +
    "(a < b): " + (a < b) + "\n" +
    "(!a && !c): " + (!a && !c) + "\n" +
    "(!a || !c): " + (!a || !c) + "\n";

alert(output);

//TASK 2

var first_name,last_name,email,output;
first_name = "Mandeep";
last_name ="Kaur";
email = "kaur0300@algonquinlive.com";
output = "My name is" + " " + (first_name) + (last_name)  + "." + " " + "You can contact me at" + " " + (email) + ".";
alert(output);

//Task 3

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];
var a = numbers[0];
var b = numbers[(numbers.length-1)];
var sum = a + b;

if (sum %2 === 0){
    alert (a + " + " + b + " = " + sum + "\n" + "This is an even number");
}else{
    alert (a + " + " + b + " = " + sum + "\n" + "This is an odd number");
}