/*question no 1
doneeeeee*/
// question no 2
console.log(" question no 2");

let personName: string = "fatima";
console.log(`hello ${personName}! you are on the right page`);
console.log("\n");

// question no 3
console.log(" question no 3");

let a: string = "fatima ";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.charAt(0).toUpperCase() + a.slice(1).toLowerCase());
console.log("\n");

// question no 4
console.log(" question no 4");

let authorName: string = "Steve Jobs";
let quote: string = "the only way to do great work is to love what you do";
console.log(` ${authorName} once said,"${quote}"`);
console.log("\n");

//question no 5
console.log(" question no 5");

let famous_person: string = "Steve Jobs";
let message: string = `${famous_person} once said,"the only way to do great work is to love what you do"`;
console.log(message);
console.log("\n");

//question no 6
console.log(" question no 6");

let pName: string = "\t\n jennifer \t\n";
console.log(pName);
console.log(pName.trim());
console.log("\n");

//question no 7
console.log(" question no 7");

console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(64 / 8);
console.log("\n");

//question no 8
console.log(" question no 8");

console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(64 / 8);
console.log("\n");

//question no 9
console.log(" question no 9");

let favourite_Number: number = 22;
let message1 = favourite_Number;
console.log(message1);
console.log("\n");

//question no 10
console.log(" question no 10");

/*the personName2 over 42 line is a variable 
and fatima is a string ,string always in quotation marks*/
let personName2: string = "fatima";
console.log(`hello ${personName2}! you are on the right page`);
console.log("\n");

// question no 11
console.log(" question no 11");

let names: string[] = ["snake1", "snake2", "snake3"];
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}
console.log("\n");

// question no 12
console.log(" question no 12");

// use array from question no 11
let namees: string[] = ["sara", "ayesha", "fatima"];
let message2 = "be humble";
for (const iterate of names) {
  console.log(`hello! ${iterate} "${message2}!"`);
}
console.log("\n");

//question no 13
console.log("question no 13");
let transport: string[] = ["motercycle", "car", "plane"];
for (let index = 0; index < transport.length; index++) {
  console.log(`"i would like to own a ${transport[index]}"`);
}
console.log("\n");

//question no 14
console.log("question no 14");

let names_For_Invitation: string[] = ["fatima", "anny", "natasha"];
for (let index = 0; index < names_For_Invitation.length; index++) {
  console.log(`${names_For_Invitation[index]}! let's have a dinner party.`);
}
console.log("\n");

//question no 15
console.log("question no 15");

let guests = ["fatima", "anny", "natasha"];
let unableToCome = guests.indexOf("natasha");
guests[unableToCome] = "hadi";
console.log(guests);

console.log("\n");

//question no 16
console.log("question no 16");

let guest = ["name1", "name2", "name3", "name4"];
guest.unshift("name2.2", "name2.0");
guest.push("name5", "name6"); ////adding more names with different methods
console.log(guest);

console.log("\n");

//question no 17
console.log("question no 17");

let invitationListt: string[] = ["fatima", "anny", "hadi"];
console.log(`${invitationListt[2]} sorry! i can not invite you.`);
//my new table won't arrive at time,so i can only invite two person
//the people i can invite
invitationListt.pop();
console.log(invitationListt);

console.log("\n");

//question no 18
console.log("question no 18");

let countries: string[] = ["korea", "japan", "america", "brazil", "turkey"];

console.log("\n");

//question no 19
console.log("question no 19");

//use question no 15
console.log(`"${guests}" so, finally I am inviting them in my dinner party.`);

console.log("\n");

//question no 20
console.log("question no 20");

let languages: string[] = ["urdu", "english", "chinese", "korean"];
console.log(languages);

console.log("\n");

//question no 21
console.log("question no 21");

let someNamesOfJjk = {
  1: "gojo",
  2: "yuta",
  3: "nobara",
  4: "yuji itaduri",
  5: "sukuna",
};
console.log(someNamesOfJjk, "they are from jjk(anime)");
console.log("\n");

//question no 22
console.log("question no 22");

let languagees: string[] = ["urdu", "english", "chinese", "korean"];
console.log(languagees[4]); //its a index error, index error is also known as "index out of range ",means which i am trying to acces is not available and the output will be "undefined"
//for correction
console.log(languagees[3]);
console.log("\n");

//question no 23
console.log("question no 23");

//for "false "output
let condi1_Color = "pink";
let condi2_Color = "yellow";
console.log(condi1_Color == condi2_Color); //false

let num = 7;
console.log(num >= 8); //false

let calculation = 6;
console.log(calculation !== 6); //false

let condi1_Num = 22;
let condi2_Num = 55;
let newVar = condi1_Num == condi2_Num;
console.log(newVar); //false

let number = 99;
console.log(number !== 99); //false

//now for the "true" output

let condi11_Color = "pink";
let condi22_Color = "pink";
console.log(condi11_Color == condi22_Color); //true

let nuum = 7;
console.log(nuum >= 7); //true

let calculation1 = 6;
console.log(calculation1 == 6); //true

let condi1_Nuum = 22;
let condi2_Nuum = 55;
let newVarr = condi1_Nuum !== condi2_Nuum;
console.log(newVarr); //true

let nummber = 99;
console.log(nummber == 99); //true

console.log("\n");

//question no 24
console.log("question no 24");

// through "logical and"
let as = 5 + 4;
let sa = 4 + 6;
console.log(as !== 4 && sa == 88); //false,cause one condi is false,so output will be false.

//through "logical or"
let ds = 33;
let sd = 55;
console.log(ds == sd || ds !== sd); //true, because one condi. is true.

//test whether an item is in a array
let fruits: string[] = ["apple", "mango", "banana"];
console.log("is 'banana' in fruits?");
console.log(fruits.includes("banana")); //true
//test whether an item is not in array

console.log("is 'cherry' in fruits?");
console.log(!fruits.includes("cherry"));
console.log("\n");

//question no 25
console.log("question no 25");

let alien_Color = "red";
if (alien_Color == "red") {
  console.log("you just earned 2 points!");
}
console.log("\n");

//question no 26
console.log("question no 26");

let alien_Colorr = "green";
if (alien_Colorr == "green") {
  console.log("yeah! thats the color of the alien.");
} else {
  console.log("thats not the color of the alien Color.");
}
console.log("\n");

//question no 27
console.log("question no 27");
//for red
let alien_Color3 = "red";
if (alien_Color3 == "yellow") {
  console.log(" this is not the color of the alien");
} else if (alien_Color3 == "green") {
  console.log("that's not the color of the alien");
} else alien_Color3 == "red";
{
  console.log("that's the color of the alien ");
}
//for yellow

let alien_Colorr3 = "yellow";
if (alien_Color3 == "yellow") {
  console.log(" that's the color of the alien");
} else if (alien_Color3 == "green") {
  console.log("that's not the color of the alien");
} else alien_Color3 == "red";
{
  console.log("that's not the color of the alien ");
}

//for green

let alienn_Color3 = "green";
if (alien_Color3 == "yellow") {
  console.log(" this is not the color of the alien");
} else if (alien_Color3 == "green") {
  console.log("that's the color of the alien");
} else alien_Color3 == "red";
{
  console.log("that's not the color of the alien");
}

console.log("\n");

//question no 28
console.log("question no 28");

let person_Age = 16;

if (person_Age >= 0 && person_Age <= 12) {
  console.log("the person's age is catagorized as 'toddler'");
} else if (person_Age >= 13 && person_Age <= 18) {
  console.log("the person's age is catagorized as 'teenager'");
} else if (person_Age >= 19 && person_Age <= 59) {
  console.log("the person's age is catagorized as 'adulthood'");
} else {
  console.log("the person's age is catagorized as 'old age'");
}

console.log("\n");

//question no 29
console.log("question no 29");

let fvrtFruits: string[] = ["watermelon", "mango", "orange"];

if (fvrtFruits.includes("watermelon")) {
  console.log("yeah! i have watermelon.");
} else if (fvrtFruits.includes("pineapple")) {
  console.log("sorry! i don't have it");
}

console.log("\n");

//question no 30
console.log("question no 30");

let greeting: string[] = ["admin", "user1", "user2", "user3"];
for (let index = 0; index < greeting.length; index++) {
  if (greeting[index] == "admin") {
    console.log("hello admin! would you like to join us?");
  } else {
    console.log("hello! would you like to join us?");
  }
}

console.log("\n");

//question no 31
console.log("question no 31");

let userName_List: string[] = [];
let av = 0;
if (userName_List.length !== 0) {
  console.log("there are some users");
} else {
  console.log("there are no users");
}

console.log("\n");

//Question no 32
console.log("question no 32");

let current_users: string[] = ["muniza", "maheen", "hiba", "aiman", "hoorain"];
let new_users: string[] = ["savera", "ayesha", "misbah", "maheen", "hiba"];

new_users.forEach((newUser) => {
  if (current_users.some((currentusers) => currentusers === newUser)) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});

console.log("/n");

//question no 33
console.log("question no 33");

let ordinalNumbers: number[] = [1, 2, 3, 4, 5];
ordinalNumbers.forEach((num) => {
  let suffix = "th";
  if (num == 1) {
    suffix = "st";
  } else if (num == 2) {
    suffix = "nd";
  } else if (num == 3) {
    suffix = "rd";
  }
  console.log(`${num}${suffix}`);
});

console.log("\n");

//question no 34
console.log("question no 34");

let pizza: string[] = ["chicken tikka", "BBQ chicken", "fajita"];
pizza.forEach((val) => {
  let loveForPizza = "";
  if (val == "chicken tikka") {
    loveForPizza = "this pizza flavor is simply irresistible to me!";
  } else if (val == "BBQ chicken") {
    loveForPizza = "i have no words for this flavor,yummm!";
  } else {
    loveForPizza = "i love this pizza.";
  }
  console.log(`${val}: ${loveForPizza}`);
});
console.log("\n");

//question no 35
console.log("question no 35");

let animals: string[] = ["tiger", "cheeta", "elephant"];
animals.forEach((animal) => {
  console.log(animal);
});
console.log("they are wild animals");
console.log("\n");

//question no 36
console.log("question no 36");

function forCustomizeTshirt(size: string, color: String, brand: string) {
  console.log(
    `customizing a t shirt (${size}) which color is ${color} and the brand name of this t shirt is ${brand}.`
  );
}

forCustomizeTshirt("small", "purple", "meoww");

console.log("\n");

//question no 37
console.log("question no 37");

function forCustomizetshirt(
  size: string = "large",
  color: String = "yellow",
  brand: string = "umm"
) {
  console.log(
    `customizing a t shirt (${size}) which color is ${color} and the brand name of this t shirt is ${brand}.`
  );
}

forCustomizetshirt();

console.log("\n");

//question no 38
console.log("question no 38");

function cities(name: string, population: number, landmarks: string) {
  console.log(
    `the population of ${name} is around ${population} and here we can visit these places ${landmarks} `
  );
}

cities("karachi", 14.91, "quaid's mausoleum,clifton beach.");
cities("islamabad", 1.015, "faisal mosque, pakistan monument");

console.log("\n");

//question no 39
console.log("question no 39");

function country(city: string, country: string) {
  console.log(`This city (${city}) is in the country (${country})`);
}

country("islamabad", "pakistan");
country("tokyo", "japan");
country("paris", "france");

console.log("\n");

//question no 40
console.log("question no 40");

function make_album(artistName: string, albumTitle: string) {
  console.log(
    `the name of the artist is ${artistName} and its album name ${albumTitle}`
  );
}
make_album("thriller", "manymore");

console.log("\n");

//question no 41
console.log("question no 41");

let magicians: string[] = ["magician1", "magicaian2", "magician3"];

for (let index = 0; index < magicians.length; index++) {
  const element = magicians[index];
  console.log(element);
}
console.log("there are few names of magicians");

console.log("\n");

//question no 42
console.log("question no 42");

let magii: string[] = ["magi1", "magi2", "magi3"];
for (let index = 0; index < magii.length; index++) {
  const element = magii[index];
  console.log(`hello! ${element}`);
}

console.log("\n");

//question no 43
console.log("question no 43");

let magicaianName: string[] = ["magician1", "magicaian2", "magician3"];

let magicaianNameCopy = [magicaianName]; //creating copy of the array

let greatMagicaianName = magicaianName.map((name) => `the great ${name}`);
console.log(`the great ${greatMagicaianName}`);
console.log("/n");

//question no 44
console.log("question no 44");

function sandwish(...item) {
  console.log(`the items which are used in sandwish are ${item.join(",")}.`);
}
sandwish(" tomatoes", "bread", "sauces");
sandwish("mayo", "ketchup", "bread");
sandwish("bum", "cucumber", "sauces");

console.log("\n");

//question no 45
console.log("question no 45");

function createCar(features: string, model: string, year: number) {
  const car = {
    features,
    model,
    year,
  };
  return car;
}

const myCar = createCar("sunroof", "toyota", 2022);

console.log(myCar);
