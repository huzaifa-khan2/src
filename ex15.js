//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
// Store the names of people you'd like to invite to dinner in an array
var guestsList = ["faraz", "ahmed", "ammar"];
// Print a personalized invitation message to each person
console.log("Invitations to dinner:");
for (var i = 0; i < guestsList.length; i++) {
    console.log("Dear " + guestsList[i] + ",");
    console.log("You are cordially invited to dinner. We would be honored to have your presence.");
    console.log("Sincerely,");
    console.log("[Your Name]");
    console.log("---------------------");
}
// Print the name of the guest who can't make it
console.log("Unfortunately, " + guestsList[1] + " can't make it to dinner.");
// Modify the list to replace the guest who can't make it with a new guest
guestsList[1] = "ammar";
// Print a second set of invitation messages
console.log("\nUpdated invitations to dinner:");
for (var i = 0; i < guestsList.length; i++) {
    console.log("Dear " + guestsList[i] + ",");
    console.log("You are cordially invited to dinner. We would be honored to have your presence.");
    console.log("Sincerely,");
    console.log("huzaifa");
    console.log("---------------------");
}
