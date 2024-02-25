//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "huzaifakhan";
//lowercase
console.log(personName.toLowerCase());
//uppercase
console.log(personName.toUpperCase());
//titlecase
var firstletter = personName.charAt(0).toUpperCase();
var restletters = personName.slice(1).toLowerCase();
var titlecase = firstletter + restletters;
console.log(titlecase);
