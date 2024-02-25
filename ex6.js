//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store a person's name with whitespace characters
var myname = "\t\t\n   huzaifa khan   \n\t";
// Print the name with whitespace
console.log("Name with whitespace:");
console.log(myname);
// Strip whitespace using trim() function
var strippedName = myname.trim();
// Print the stripped name
console.log("\nName after stripping whitespace:");
console.log(strippedName);
