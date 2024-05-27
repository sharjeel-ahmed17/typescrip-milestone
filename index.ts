// # Getting Started Exercises with TypeScript and Node.js

// Note: Try these short programs to get some firsthand experience with TypeScript and Node.js.
// You might want to create a new folder for each exercise to keep them organized. Create a single Github repository to commit the code for these exercises and once finished submit the URL of the repo.

// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.

// todo : i have been installed all envirmental setup.

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”

// todo : answer :

let pName = "usman ";
console.log("hello ", pName, "whould you like to take cofee with me");

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// todo : answer :

let name1 = "usman";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.charAt(0).toUpperCase() + name1.slice(1));

// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// todo : answer :
console.log(
  '"Albert Einstein once said, “A person who never made a mistake never tried anything new"'
);

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// todo : answer :
let famous_person = "albert einstein";

let message =
  "once said, “A person who never made a mistake never tried anything new";
console.log(famous_person, message);

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// todo : answer :

let name2 = "\t\n  usman  \t\n";
console.log(name2);
console.log(name2.trim());

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// 8. You should create four lines that look like this:

// _____________________________________________

// console.log(5 + 3)

// _____________________________________________
// todo : answer
console.log(4 + 4);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Your output should simply be four lines with the number 8 appearing once on each line.

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// todo : answer:
let favNumber = 17;
let messageNum = "my favorite number is " + favNumber;
console.log(messageNum);

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.

// todo : answer :

// ! i have already do this

// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// todo : answer :

let names = ["usman", "ali", "ahmed"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
// todo : answer
let greet = names.map((item) => {
  return `hello ${item} how are you`;
});
console.log(greet);

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// todo : ansawer:
let favoriteCars = ["land curuzer", "bmw", "farari", "honda"];

let printMes = favoriteCars.map((item) => {
  return `i would like to own a ${item} motorcycle`;
});
console.log(printMes);

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// todo : answer :

let guestList = ["usman", "ali", "ahmed"];
let myName = "sharjeel Ahmed";
console.log(guestList);
let printGuestList = guestList.map((item) => {
  return `Dear ${item} 
  You are cordially invited to dinner at my place. It would be an honor to have you join us.
  Best regards,
  ${myName}"`;
});

console.log(printGuestList);

// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.
// todo : answer :
let unAbleToAtend = "ali";
let replacementGuest = "moin";
let indexOfUnableToAttend = guestList.indexOf(unAbleToAtend);
// console.log(indexOfUnableToAttend);
guestList[indexOfUnableToAttend] = replacementGuest;
console.log("updated guest lists");
console.log(guestList);

let invitedGuest = guestList.map((item) => {
  return `Dear ${item} 
  You are cordially invited to dinner at my place. It would be an honor to have you join us.
  Best regards,
  ${myName}"`;
});
console.log(invitedGuest);

// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
//  todo : answer :
let addNewGuest = guestList.unshift("ballo bhai");
let addNewGuestInmiddle = Math.floor(guestList.length / 2);
let prinvalues = guestList.splice(addNewGuestInmiddle, 0, "hamza");
guestList.push("daim");
console.log(addNewGuest);
let inviteDinnerOnbigTable = guestList.map((item) => {
  return `Dear ${item} 
  You are cordially invited to dinner at my place. It would be an honor to have you join us.
  Best regards,
  ${myName}"`;
});
console.log(inviteDinnerOnbigTable);

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

let guestList1 = ["Albert Einstein", "Jane Austen", "Leonardo da Vinci"];
let unableToAttend1 = "Jane Austen";
let replacementGuest1 = "Nikola Tesla";

// Find the index of the guest who can't attend
let indexOfUnableToAttend1 = guestList1.indexOf(unableToAttend1);

// Replace the unable guest with the replacement guest
guestList1[indexOfUnableToAttend1] = replacementGuest1;

console.log("Updated guest list:");
console.log(guestList1);

// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guestList1.unshift("Marie Curie");

// Add one new guest to the middle of the array
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Isaac Newton");

// Add one new guest to the end of the list
guestList1.push("Galileo Galilei");

// Print invitation messages for each person in the list
function inviteToDinner(guestsArray: string | any[]) {
  for (let i = 0; i < guestsArray.length; i++) {
    console.log(
      "Dear " +
        guestsArray[i] +
        ",\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nBest regards,\n[Your Name]"
    );
  }
}

inviteToDinner(guestList1);

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in an array. Make sure the array is not in alphabetical order.
let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Cairo"];

// • Print your array in its original order.
console.log("Original order:", placesToVisit);

// • Print your array in alphabetical order without modifying the actual list.
let placesInAlphabeticalOrder = [...placesToVisit].sort();
console.log("Alphabetical order:", placesInAlphabeticalOrder);

// • Show that your array is still in its original order by printing it.
console.log("Original order (unchanged):", placesToVisit);

// • Print your array in reverse alphabetical order without changing the order of the original list.
let placesInReverseAlphabeticalOrder = [...placesToVisit].sort().reverse();
console.log("Reverse alphabetical order:", placesInReverseAlphabeticalOrder);

// • Show that your array is still in its original order by printing it again.
console.log("Original order (unchanged):", placesToVisit);

// • Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort().reverse();
console.log("Sorted in reverse alphabetical order:", placesToVisit);

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
console.log("Number of people invited to dinner:", placesToVisit.length);

// 20. Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let favoriteBooks: string[] = [
  "1984",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Moby Dick",
  "War and Peace",
];
console.log("Favorite books:", favoriteBooks);

// 21. Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface Book {
  title: string;
  author: string;
  year: number;
}

let book: Book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
};
console.log("Book object:", book);

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// This line will cause an index error
// console.log(favoriteBooks[10]); // Uncommenting this line will cause an error
// Correcting the error
console.log(favoriteBooks[4]);

// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let testString = "hello";
console.log("Is testString == 'hello'? I predict True.", testString == "hello");
console.log(
  "Is testString == 'world'? I predict False.",
  testString == "world"
);
console.log("Is testString != 'world'? I predict True.", testString != "world");
console.log(
  "Is testString.length > 5? I predict False.",
  testString.length > 5
);
console.log(
  "Is testString.length <= 5? I predict True.",
  testString.length <= 5
);

let testNumber = 10;
console.log("Is testNumber == 10? I predict True.", testNumber == 10);
console.log("Is testNumber > 5? I predict True.", testNumber > 5);
console.log("Is testNumber < 10? I predict False.", testNumber < 10);
console.log("Is testNumber != 10? I predict False.", testNumber != 10);
console.log("Is testNumber >= 10? I predict True.", testNumber >= 10);

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
console.log("Is 'apple' == 'apple'? I predict True.", "apple" == "apple");
console.log("Is 'apple' != 'orange'? I predict True.", "apple" != "orange");
console.log("Is 'apple' == 'orange'? I predict False.", "apple" == "orange");
console.log("Is 'apple' != 'apple'? I predict False.", "apple" != "apple");

// • Tests using the lower case function
let upperString = "HELLO";
console.log(
  "Is upperString.toLowerCase() == 'hello'? I predict True.",
  upperString.toLowerCase() == "hello"
);
console.log(
  "Is upperString.toLowerCase() == 'HELLO'? I predict False.",
  upperString.toLowerCase() == "HELLO"
);

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 15;
console.log("Is num == 15? I predict True.", num == 15);
console.log("Is num != 10? I predict True.", num != 10);
console.log("Is num > 10? I predict True.", num > 10);
console.log("Is num < 20? I predict True.", num < 20);
console.log("Is num <= 15? I predict True.", num <= 15);
console.log("Is num >= 15? I predict True.", num >= 15);
console.log("Is num < 10? I predict False.", num < 10);
console.log("Is num > 20? I predict False.", num > 20);

// • Tests using "and" and "or" operators
console.log("Is num > 10 && num < 20? I predict True.", num > 10 && num < 20);
console.log("Is num < 10 || num > 20? I predict False.", num < 10 || num > 20);

// • Test whether an item is in an array
console.log(
  "Is 'apple' in ['apple', 'banana', 'cherry']? I predict True.",
  ["apple", "banana", "cherry"].includes("apple")
);
console.log(
  "Is 'grape' in ['apple', 'banana', 'cherry']? I predict False.",
  ["apple", "banana", "cherry"].includes("grape")
);

// • Test whether an item is not in an array
console.log(
  "Is 'grape' not in ['apple', 'banana', 'cherry']? I predict True.",
  !["apple", "banana", "cherry"].includes("grape")
);
console.log(
  "Is 'apple' not in ['apple', 'banana', 'cherry']? I predict False.",
  !["apple", "banana", "cherry"].includes("apple")
);

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color = "green";

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color = "red";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

alien_color = "yellow";

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");

  // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
} else {
  console.log("You just earned 10 points!");
}

// • Write one version of this program that runs the if block and another that runs the else block.
alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

alien_color = "red";

// • If the alien is green, print a message that the player earned 5 points.
if (alien_color == "green") {
  console.log("You just earned 5 points!");
  // • If the alien is yellow, print a message that the player earned 10 points.
} else if (alien_color == "yellow") {
  console.log("You just earned 10 points!");
  // • If the alien is red, print a message that the player earned 15 points.
} else if (alien_color == "red") {
  console.log("You just earned 15 points!");
}

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
} else if (alien_color == "yellow") {
  console.log("You just earned 10 points!");
} else if (alien_color == "red") {
  console.log("You just earned 15 points!");
}

alien_color = "yellow";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
} else if (alien_color == "yellow") {
  console.log("You just earned 10 points!");
} else if (alien_color == "red") {
  console.log("You just earned 15 points!");
}

alien_color = "red";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
} else if (alien_color == "yellow") {
  console.log("You just earned 10 points!");
} else if (alien_color == "red") {
  console.log("You just earned 15 points!");
}

// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 25;

// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
  console.log("The person is a baby.");
  // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
  // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
  // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
  // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
  // • If the person is age 65 or older, print a message that the person is an elder.
} else {
  console.log("The person is an elder.");
}

// 29. Favorite Fruit: Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make an array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: string[] = ["apple", "banana", "cherry"];

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("cherry")) {
  console.log("You really like cherries!");
}
if (favorite_fruits.includes("grape")) {
  console.log("You really like grapes!");
}
if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

// 30. Hello Admin: Make an array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames12: string[] = ["admin", "eric", "jane", "john", "alice"];

for (let username12 of usernames12) {
  if (username12 == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username12}, thank you for logging in again.`);
  }
}
// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

// • If the list is empty, print the message "We need to find some users!"

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames: string[] = ["admin", "eric", "jane", "john", "alice"];

// Check if the list is empty
if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames) {
    if (username == "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames and test again
usernames = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
}

// 32. Checking Usernames: Create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
let current_users: string[] = ["john", "jane", "doe", "eric", "admin"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["John", "jane", "susan", "mike", "admin"];

// • Loop through the new_users list to see if each new username has already been used.
for (let newUser of new_users) {
  // Make sure the comparison is case insensitive
  let isAvailable = current_users.some(
    (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
  );
  if (isAvailable) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
}

// 33. Ordinal Numbers: Ordinal numbers indicate their position in an array, such as 1st or 2nd.

// • Store the numbers 1 through 9 in an array.
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// • Loop through the array.
for (let number of numbers) {
  // • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
}

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in an array.
let favoritePizzas: string[] = ["pepperoni", "margherita", "bbq chicken"];

// • Use a for loop to print the name of each pizza.
for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
console.log("I really love pizza!");

// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list.
let animals: string[] = ["dog", "cat", "rabbit"];

// • Use a for loop to print out the name of each animal.
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

// • Add a line at the end of your program stating what these animals have in common.
console.log("Any of these animals would make a great pet!");

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
function make_shirt12(size: string, message: string): void {
  console.log(
    `The shirt size is ${size} and it has the message: "${message}" printed on it.`
  );
}

// Call the function.
make_shirt12("M", "I love TypeScript");

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads "I love TypeScript".
function make_shirt2(
  size: string = "L",
  message: string = "I love TypeScript"
): void {
  console.log(
    `The shirt size is ${size} and it has the message: "${message}" printed on it.`
  );
}

// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
make_shirt2();
make_shirt2("M");
make_shirt2("S", "TypeScript is awesome!");

// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(city: string, country: string = "USA"): void {
  console.log(`${city} is in ${country}.`);
}

// Call your function for three different cities, at least one of which is not in the default country.
describe_city("New York");
describe_city("Los Angeles");
describe_city("Tokyo", "Japan");

// 39. City Names: Write a function called city_country() that takes in the name of a city and its country.
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));

// 40. Album: Write a function called make_album() that builds an Object describing a music album.
interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
  let album: Album = { artist, title };
  if (tracks) {
    album.tracks = tracks;
  }
  return album;
}

// Use the function to make three dictionaries representing different albums.
let album1 = make_album("Taylor Swift", "1989");
let album2 = make_album("Adele", "25");
let album3 = make_album("The Beatles", "Abbey Road", 17);

// Print each return value to show that Objects are storing the album information correctly.
console.log(album1);
console.log(album2);
console.log(album3);

// 41. Magicians: Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette"];

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);

// 42. Great Magicians: Write a function called make_great() that modifies the array of magicians by adding the phrase "the Great" to each magician’s name.
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
}

make_great(magicians);
show_magicians(magicians);

// 43. Unchanged Magicians: Call the function make_great() with a copy of the array of magicians’ names.
let magiciansCopy: string[] = [
  "Harry Houdini",
  "David Blaine",
  "Penn Jillette",
];
let greatMagicians: string[] = [...magiciansCopy];

make_great(greatMagicians);

show_magicians(magiciansCopy);
show_magicians(greatMagicians);

// 44. Sandwiches: Write a function that accepts an array of items a person wants on a sandwich.
function make_sandwich(...items: string[]): void {
  console.log("Sandwich with the following items:");
  for (let item of items) {
    console.log(`- ${item}`);
  }
}

// Call the function three times, using a different number of arguments each time.
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("bacon", "egg", "avocado", "mayo");

// 45. Cars: Write a function that stores information about a car in an Object.
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Car {
  let car: Car = { manufacturer, model };
  for (let [key, value] of options) {
    car[key] = value;
  }
  return car;
}

// Call the function with the required information and two other name-value pairs.
let myCar = make_car("Toyota", "Corolla", ["color", "blue"], ["sunroof", true]);

// Print the Object that’s returned to make sure all the information was stored correctly.
console.log(myCar);
