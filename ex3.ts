//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 let personName:string = "huzaifakhan";

//lowercase
 console.log(personName.toLowerCase());
//uppercase
 console.log(personName.toUpperCase());
//titlecase
let firstletter:string = personName.charAt(0).toUpperCase();
let restletters:string = personName.slice(1).toLowerCase();
let titlecase = firstletter + restletters;

console.log(titlecase);
 
 

