//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Store the names of people you'd like to invite to dinner in an array
let guestList: string[] = ["faraz", "ahmed", "ammar"];

// Print a personalized invitation message to each person
console.log("Invitations to dinner:");
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",");
    console.log("You are cordially invited to dinner. We would be honored to have your presence.");
    console.log("Sincerely,");
    console.log("Huzaifa");
    console.log("---------------------");
}
