//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var myfriends = ["Ahmed", "faraz", "Ammar"];
console.log(myfriends);
console.log("we have 3 more friends to invite on dinner\n");
//adding three more friends
myfriends.unshift("khan");
console.log(myfriends);
//add at middle
myfriends.splice(2, 0, 'ali'); //index 2 is Ali
console.log(myfriends);
//add at last
myfriends.push("aliraza");
console.log(myfriends);
//print all freinds along with message
for (var i = 0; i < myfriends.length; i++) {
    console.log("Dear " + myfriends[i] + ",");
    console.log("You are cordially invited to dinner. We would be honored to have your presence.");
    console.log("Sincerely,");
    console.log("huzaifa");
    console.log("---------------------");
}
