//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Store the names of people you'd like to invite to dinner in an array
const myfriends: string[] = ["Ahmed", "faraz", "Ammar", "khan", "ali", "aliraza"];

// Print a message indicating the number of people being invited to dinner
console.log("Number of people invited to dinner:", myfriends.length);

for  (let i = 0; i < myfriends.length; i++) {
    // Use template literals to print each friend's name on its own line with a personalized greeting
    console.log(`${i+1} . ${myfriends[i]} `);
}
