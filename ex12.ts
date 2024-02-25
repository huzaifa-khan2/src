//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Store the names of your friends in an array called names
let Names: string[] = ["hamza", "ali", "huzaifa", "ammar", "faraz"];

// Print a personalized greeting message to each person
console.log("Greetings to my friends:");
for (let i = 0; i < Names.length; i++) {
    console.log("Hello, " + Names[i] + "! I hope you're doing well.");
}
