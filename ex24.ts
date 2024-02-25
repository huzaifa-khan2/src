// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array.

// Tests for equality and inequality with strings:
// Test for equality:
let string1: string = "hello";
let string2: string = "hello";
console.log(string1 === string2); // true

// Test for inequality:
let string3: string = "hello";
let string4: string = "world";
console.log(string3 !== string4); // true

// Tests using the lowercase function:
// Test with lowercase function:
let string5: string = "Hello World";
let lowercaseString: string = string5.toLowerCase();
console.log(lowercaseString === "hello world"); // true

// Numerical tests:
// Test for equality:
let num1: number = 10;
let num2: number = 10;
console.log(num1 === num2); // true

// Test for inequality:
let num3: number = 5;
let num4: number = 10;
console.log(num3 !== num4); // true

// Test for greater than:
let num5: number = 15;
let num6: number = 10;
console.log(num5 > num6); // true

// Test for less than:
let num7: number = 5;
let num8: number = 10;
console.log(num7 < num8); // true

// Test for greater than or equal to:
let num9: number = 10;
let num10: number = 10;
console.log(num9 >= num10); // true

// Test for less than or equal to:
let num11: number = 5;
let num12: number = 10;
console.log(num11 <= num12); // true

// Tests using "and" and "or" operators:
// Test using "and" operator:
let x: number = 5;
console.log(x > 0 && x < 10); // true

// Test using "or" operator:
let y: number = -5;
console.log(y < 0 || y > 10); // true

// Test whether an item is in an array:
let array: number[] = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // true

// Test whether an item is not in an array:
console.log(!array.includes(6)); // true
