// Guests attending Mr.Fahim's wedding

let guestNames: string[] = [
    "Talia", "Arham", "Maaz", "Hasan", "Saad", "Shahmeer",
    "Nofil", "Daniyal", "Abdul Moiz", "Faizan", "Tahir",
    "Ahmed", "Arshad", "Muzammil", "Mudassir"
  ];


// 100 guests will be invited!!!

// using the same above attendies as a loop 
  let weddingGuests: string[] = [];
  for (let i = 0; i < 100; i++) {
    let randomName: string = guestNames[Math.floor(Math.random() * guestNames.length)];
    weddingGuests.push(randomName);
  }

  for (let guest of weddingGuests) {
    console.log(`Inviting ${guest} to Mr. Fahim's wedding.`);
  };
console.log(`\n`);

  // due to rainy weather 10 people will not attend the wedding but will be invited in the reception

  let startIndex: number = Math.floor(Math.random() * (weddingGuests.length - 10));
let endIndex: number = startIndex + 10;

let removedGuests: string[] = weddingGuests.splice(startIndex, 10);

console.log(`\nDue to rain, 10 people are not coming on the wedding.`);

for (let removedGuest of removedGuests){
    console.log(`Unfortunately,${removedGuest} will not attend.`);
}
console.log(`We appreciate your understanding, and we'll remember you during the reception!\n`);

// more guests up to 200!!!

let additionalGuests: string[] = [];
for (let i = 0; i < 100; i++) {
  let randomName: string = guestNames[Math.floor(Math.random() * guestNames.length)];
  additionalGuests.push(randomName);
};

// Adding the previously removed guests back
for (let removedGuest of removedGuests) {
  additionalGuests.push(removedGuest);
};

console.log(`\nThe wedding venue has been changed, it means more space and more guests.`);
for (let newGuest of additionalGuests) {
    console.log(`${newGuest}, you are also invited to Mr.Fahim's wedding.`);
};
