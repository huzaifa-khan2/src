//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Store the names of people you'd like to invite to dinner in an array
var myfriends = ["Ahmed", "faraz", "Ammar", "khan", "ali", "aliraza"];
// Inform that only two people can be invited to dinner
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (myfriends.length > 2) {
    var removedFriend = myfriends.pop(); // Remove the last friend from the list
    console.log("Sorry, " + removedFriend + ", we can't invite you to dinner.");
}
// Print a message to the two remaining friends
console.log("\nYou're still invited to dinner, " + myfriends[0] + "!");
console.log("\nYou're still invited to dinner, " + myfriends[1] + "!");
// Remove the last two names from the list
myfriends.pop();
myfriends.pop();
// Print the list to ensure it's empty
console.log("\nRemaining guest list:", myfriends);
