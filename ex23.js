var car = 'subaru';
var age = 25;
var hasLicense = true;
var isLearning = false;
// Tests predicted to evaluate to True:
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True because car is 'subaru'
console.log("Is age greater than 18? I predict True.");
console.log(age > 18); // True because 25 is greater than 18
console.log("Does the person have a license and are they not learning to drive? I predict True.");
console.log(hasLicense && !isLearning); // True because both conditions are met
console.log("Is car not equal to 'tesla'? I predict True.");
console.log(car !== 'tesla'); // True because car is 'subaru'
console.log("Is age less than or equal to 30? I predict True.");
console.log(age <= 30); // True because 25 is less than 30
// Tests predicted to evaluate to False:
console.log("Is car equal to 'toyota'? I predict False.");
console.log(car === 'toyota'); // False because car is 'subaru'
console.log("Is age 15 or younger? I predict False.");
console.log(age <= 15); // False because 25 is greater than 15
console.log("Does the person have a license and are they learning to drive? I predict False.");
console.log(hasLicense && isLearning); // False because isLearning is false
console.log("Is age greater than 50? I predict False.");
console.log(age > 50); // False because 25 is less than 50
console.log("Is hasLicense equal to true? I predict True.");
console.log(hasLicense === true); // Now correctly evaluates to True
