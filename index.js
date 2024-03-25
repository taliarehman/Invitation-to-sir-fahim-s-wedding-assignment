// Guests attending Mr.Fahim's wedding
var guestNames = [
    "Talia", "Arham", "Maaz", "Hasan", "Saad", "Shahmeer",
    "Nofil", "Daniyal", "Abdul Moiz", "Faizan", "Tahir",
    "Ahmed", "Arshad", "Muzammil", "Mudassir"
];
// 100 guests will be invited!!!
// using the same above attendies as a loop 
var weddingGuests = [];
for (var i = 0; i < 100; i++) {
    var randomName = guestNames[Math.floor(Math.random() * guestNames.length)];
    weddingGuests.push(randomName);
}
for (var _i = 0, weddingGuests_1 = weddingGuests; _i < weddingGuests_1.length; _i++) {
    var guest = weddingGuests_1[_i];
    console.log("Inviting ".concat(guest, " to Mr. Fahim's wedding:"));
}
;
console.log("\n");
// due to rainy weather 10 people will not attend the wedding but will be invited in the reception
var startIndex = Math.floor(Math.random() * (weddingGuests.length - 10));
var endIndex = startIndex + 10;
var removedGuests = weddingGuests.splice(startIndex, 10);
console.log("\nDue to rain, 10 people are not coming on the wedding.");
for (var _a = 0, removedGuests_1 = removedGuests; _a < removedGuests_1.length; _a++) {
    var removedGuest = removedGuests_1[_a];
    console.log("Unfortunately,".concat(removedGuest, " will not attend."));
}
console.log("We appreciate your understanding, and we'll remember you during the reception!\n");
// more guests up to 200!!!
var additionalGuests = [];
for (var i = 0; i < 100; i++) {
    var randomName = guestNames[Math.floor(Math.random() * guestNames.length)];
    additionalGuests.push(randomName);
}
;
// Adding the previously removed guests back
for (var _b = 0, removedGuests_2 = removedGuests; _b < removedGuests_2.length; _b++) {
    var removedGuest = removedGuests_2[_b];
    additionalGuests.push(removedGuest);
}
;
console.log("\nThe wedding venue has been changed, it means more space and more guests.");
for (var _c = 0, additionalGuests_1 = additionalGuests; _c < additionalGuests_1.length; _c++) {
    var newGuest = additionalGuests_1[_c];
    console.log("".concat(newGuest, ", you are also invited to Mr.Fahim's wedding."));
}
;
