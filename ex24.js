// Tests for equality and inequality with strings:
// Test for equality:
var string1 = "hello";
var string2 = "hello";
console.log(string1 === string2); // true
// Test for inequality:
var string3 = "hello";
var string4 = "world";
console.log(string3 !== string4); // true
// Tests using the lowercase function:
// Test with lowercase function:
var string5 = "Hello World";
var lowercaseString = string5.toLowerCase();
console.log(lowercaseString === "hello world"); // true
// Numerical tests:
// Test for equality:
var num1 = 10;
var num2 = 10;
console.log(num1 === num2); // true
// Test for inequality:
var num3 = 5;
var num4 = 10;
console.log(num3 !== num4); // true
// Test for greater than:
var num5 = 15;
var num6 = 10;
console.log(num5 > num6); // true
// Test for less than:
var num7 = 5;
var num8 = 10;
console.log(num7 < num8); // true
// Test for greater than or equal to:
var num9 = 10;
var num10 = 10;
console.log(num9 >= num10); // true
// Test for less than or equal to:
var num11 = 5;
var num12 = 10;
console.log(num11 <= num12); // true
// Tests using "and" and "or" operators:
// Test using "and" operator:
var x = 5;
console.log(x > 0 && x < 10); // true
// Test using "or" operator:
var y = -5;
console.log(y < 0 || y > 10); // true
// Test whether an item is in an array:
var array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // true
// Test whether an item is not in an array:
console.log(!array.includes(6)); // true
