/*question no 1
doneeeeee*/
// question no 2
console.log(" question no 2");
var personName = "fatima";
console.log("hello ".concat(personName, "! you are on the right page"));
console.log("\n");
// question no 3
console.log(" question no 3");
var a = "fatima ";
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.charAt(0).toUpperCase() + a.slice(1).toLowerCase());
console.log("\n");
// question no 4
console.log(" question no 4");
var authorName = "Steve Jobs";
var quote = "the only way to do great work is to love what you do";
console.log(" ".concat(authorName, " once said,\"").concat(quote, "\""));
console.log("\n");
//question no 5
console.log(" question no 5");
var famous_person = "Steve Jobs";
var message = "".concat(famous_person, " once said,\"the only way to do great work is to love what you do\"");
console.log(message);
console.log("\n");
//question no 6
console.log(" question no 6");
var pName = "\t\n jennifer \t\n";
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
var favourite_Number = 22;
var message1 = favourite_Number;
console.log(message1);
console.log("\n");
//question no 10
console.log(" question no 10");
/*the personName2 over 42 line is a variable
and fatima is a string ,string always in quotation marks*/
var personName2 = "fatima";
console.log("hello ".concat(personName2, "! you are on the right page"));
console.log("\n");
// question no 11
console.log(" question no 11");
var names = ["snake1", "snake2", "snake3"];
for (var index = 0; index < names.length; index++) {
    console.log(names[index]);
}
console.log("\n");
// question no 12
console.log(" question no 12");
// use array from question no 11
var namees = ["sara", "ayesha", "fatima"];
var message2 = "be humble";
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var iterate = names_1[_i];
    console.log("hello! ".concat(iterate, " \"").concat(message2, "!\""));
}
console.log("\n");
//question no 13
console.log("question no 13");
var transport = ["motercycle", "car", "plane"];
for (var index = 0; index < transport.length; index++) {
    console.log("\"i would like to own a ".concat(transport[index], "\""));
}
console.log("\n");
//question no 14
console.log("question no 14");
var names_For_Invitation = ["fatima", "anny", "natasha"];
for (var index = 0; index < names_For_Invitation.length; index++) {
    console.log("".concat(names_For_Invitation[index], "! let's have a dinner party."));
}
console.log("\n");
//question no 15
console.log("question no 15");
var guests = ["fatima", "anny", "natasha"];
var unableToCome = guests.indexOf("natasha");
guests[unableToCome] = "hadi";
console.log(guests);
console.log("\n");
//question no 16
console.log("question no 16");
var guest = ["name1", "name2", "name3", "name4"];
guest.unshift("name2.2", "name2.0");
guest.push("name5", "name6"); ////adding more names with different methods
console.log(guest);
console.log("\n");
//question no 17
console.log("question no 17");
var invitationListt = ["fatima", "anny", "hadi"];
console.log("".concat(invitationListt[2], " sorry! i can not invite you."));
//my new table won't arrive at time,so i can only invite two person
//the people i can invite
invitationListt.pop();
console.log(invitationListt);
console.log("\n");
//question no 18
console.log("question no 18");
var countries = ["korea", "japan", "america", "brazil", "turkey"];
console.log("\n");
//question no 19
console.log("question no 19");
//use question no 15
console.log("\"".concat(guests, "\" so, finally I am inviting them in my dinner party."));
console.log("\n");
//question no 20
console.log("question no 20");
var languages = ["urdu", "english", "chinese", "korean"];
console.log(languages);
console.log("\n");
//question no 21
console.log("question no 21");
var someNamesOfJjk = {
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
var languagees = ["urdu", "english", "chinese", "korean"];
console.log(languagees[4]); //its a index error, index error is also known as "index out of range ",means which i am trying to acces is not available and the output will be "undefined"
//for correction
console.log(languagees[3]);
console.log("\n");
//question no 23
console.log("question no 23");
//for "false "output
var condi1_Color = "pink";
var condi2_Color = "yellow";
console.log(condi1_Color == condi2_Color); //false
var num = 7;
console.log(num >= 8); //false
var calculation = 6;
console.log(calculation !== 6); //false
var condi1_Num = 22;
var condi2_Num = 55;
var newVar = condi1_Num == condi2_Num;
console.log(newVar); //false
var number = 99;
console.log(number !== 99); //false
//now for the "true" output
var condi11_Color = "pink";
var condi22_Color = "pink";
console.log(condi11_Color == condi22_Color); //true
var nuum = 7;
console.log(nuum >= 7); //true
var calculation1 = 6;
console.log(calculation1 == 6); //true
var condi1_Nuum = 22;
var condi2_Nuum = 55;
var newVarr = condi1_Nuum !== condi2_Nuum;
console.log(newVarr); //true
var nummber = 99;
console.log(nummber == 99); //true
console.log("\n");
//question no 24
console.log("question no 24");
// through "logical and"
var as = 5 + 4;
var sa = 4 + 6;
console.log(as !== 4 && sa == 88); //false,cause one condi is false,so output will be false.
//through "logical or"
var ds = 33;
var sd = 55;
console.log(ds == sd || ds !== sd); //true, because one condi. is true.
//test whether an item is in a array
var fruits = ["apple", "mango", "banana"];
console.log("is 'banana' in fruits?");
console.log(fruits.includes("banana")); //true
//test whether an item is not in array
console.log("is 'cherry' in fruits?");
console.log(!fruits.includes("cherry"));
console.log("\n");
//question no 25
console.log("question no 25");
var alien_Color = "red";
if (alien_Color == "red") {
    console.log("you just earned 2 points!");
}
console.log("\n");
//question no 26
console.log("question no 26");
var alien_Colorr = "green";
if (alien_Colorr == "green") {
    console.log("yeah! thats the color of the alien.");
}
else {
    console.log("thats not the color of the alien Color.");
}
console.log("\n");
//question no 27
console.log("question no 27");
//for red
var alien_Color3 = "red";
if (alien_Color3 == "yellow") {
    console.log(" this is not the color of the alien");
}
else if (alien_Color3 == "green") {
    console.log("that's not the color of the alien");
}
else
    alien_Color3 == "red";
{
    console.log("that's the color of the alien ");
}
//for yellow
var alien_Colorr3 = "yellow";
if (alien_Color3 == "yellow") {
    console.log(" that's the color of the alien");
}
else if (alien_Color3 == "green") {
    console.log("that's not the color of the alien");
}
else
    alien_Color3 == "red";
{
    console.log("that's not the color of the alien ");
}
//for green
var alienn_Color3 = "green";
if (alien_Color3 == "yellow") {
    console.log(" this is not the color of the alien");
}
else if (alien_Color3 == "green") {
    console.log("that's the color of the alien");
}
else
    alien_Color3 == "red";
{
    console.log("that's not the color of the alien");
}
console.log("\n");
//question no 28
console.log("question no 28");
var person_Age = 16;
if (person_Age >= 0 && person_Age <= 12) {
    console.log("the person's age is catagorized as 'toddler'");
}
else if (person_Age >= 13 && person_Age <= 18) {
    console.log("the person's age is catagorized as 'teenager'");
}
else if (person_Age >= 19 && person_Age <= 59) {
    console.log("the person's age is catagorized as 'adulthood'");
}
else {
    console.log("the person's age is catagorized as 'old age'");
}
console.log("\n");
//question no 29
console.log("question no 29");
var fvrtFruits = ["watermelon", "mango", "orange"];
if (fvrtFruits.includes("watermelon")) {
    console.log("yeah! i have watermelon.");
}
else if (fvrtFruits.includes("pineapple")) {
    console.log("sorry! i don't have it");
}
console.log("\n");
//question no 30
console.log("question no 30");
var greeting = ["admin", "user1", "user2", "user3"];
for (var index = 0; index < greeting.length; index++) {
    if (greeting[index] == "admin") {
        console.log("hello admin! would you like to join us?");
    }
    else {
        console.log("hello! would you like to join us?");
    }
}
console.log("\n");
//question no 31
console.log("question no 31");
var userName_List = [];
var av = 0;
if (userName_List.length !== 0) {
    console.log("there are some users");
}
else {
    console.log("there are no users");
}
console.log("\n");
//question no 32
console.log("question no 32");
var current_users = ["muniza", "maheen", "hiba", "aiman", "hoorain"];
var new_users = ["savera", "ayesha", "misbah", "maheen", "hiba"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentusers) { return currentusers === newUser; })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//question no 33
console.log("question no 33");
var ordinalNumbers = [1, 2, 3, 4, 5];
ordinalNumbers.forEach(function (num) {
    var suffix = "th";
    if (num == 1) {
        suffix = "st";
    }
    else if (num == 2) {
        suffix = "nd";
    }
    else if (num == 3) {
        suffix = "rd";
    }
    console.log("".concat(num).concat(suffix));
});
//question no 34
console.log("question no 34");
var pizza = ["chicken tikka", "BBQ chicken", "fajita"];
pizza.forEach(function (val) {
    var loveForPizza = "";
    if (val == "chicken tikka") {
        loveForPizza = "this pizza flavor is simply irresistible to me!";
    }
    else if (val == "BBQ chicken") {
        loveForPizza = "i have no words for this flavor,yummm!";
    }
    else {
        loveForPizza = "i love this pizza.";
    }
    console.log("".concat(val, ": ").concat(loveForPizza));
});
console.log("\n");
//question no 35
console.log("question no 35");
var animals = ["tiger", "cheeta", "elephant"];
animals.forEach(function (animal) {
    console.log(animal);
});
console.log("they are wild animals");
console.log("\n");
//question no 36
console.log("question no 36");
function forCustomizeTshirt(size, color, brand) {
    console.log("customizing a t shirt (".concat(size, ") which color is ").concat(color, " and the brand name of this t shirt is ").concat(brand, "."));
}
forCustomizeTshirt("small", "purple", "meoww");
console.log("\n");
//question no 37
console.log("question no 37");
function forCustomizetshirt(size, color, brand) {
    if (size === void 0) { size = "large"; }
    if (color === void 0) { color = "yellow"; }
    if (brand === void 0) { brand = "umm"; }
    console.log("customizing a t shirt (".concat(size, ") which color is ").concat(color, " and the brand name of this t shirt is ").concat(brand, "."));
}
forCustomizetshirt();
console.log("\n");
//question no 38
console.log("question no 38");
function cities(name, population, landmarks) {
    console.log("the population of ".concat(name, " is around ").concat(population, " and here we can visit these places ").concat(landmarks, " "));
}
cities("karachi", 14.91, "quaid's mausoleum,clifton beach.");
cities("islamabad", 1.015, "faisal mosque, pakistan monument");
console.log("\n");
//question no 39
console.log("question no 39");
function country(city, country) {
    console.log("This city (".concat(city, ") is in the country (").concat(country, ")"));
}
country("islamabad", "pakistan");
country("tokyo", "japan");
country("paris", "france");
console.log("\n");
//question no 40
console.log("question no 40");
function make_album(artistName, albumTitle) {
    console.log("the name of the artist is ".concat(artistName, " and its album name ").concat(albumTitle));
}
make_album("thriller", "manymore");
console.log("\n");
//question no 41
console.log("question no 41");
var magicians = ["magician1", "magicaian2", "magician3"];
for (var index = 0; index < magicians.length; index++) {
    var element = magicians[index];
    console.log(element);
}
console.log("there are few names of magicians");
console.log("\n");
//question no 42
console.log("question no 42");
var magii = ["magi1", "magi2", "magi3"];
for (var index = 0; index < magii.length; index++) {
    var element = magii[index];
    console.log("hello! ".concat(element));
}
console.log("\n");
//question no 43
console.log("question no 43");
var magicaianName = ["magician1", "magicaian2", "magician3"];
var magicaianNameCopy = [magicaianName]; //creating copy of the array
var greatMagicaianName = magicaianName.map(function (name) { return "the great ".concat(name); });
console.log("the great ".concat(greatMagicaianName));
console.log('/n');
//question no 44
console.log("question no 44");
function sandwish() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("the items which are used in sandwish are ".concat(item.join(","), "."));
}
sandwish(" tomatoes", "bread", "sauces");
sandwish("mayo", "ketchup", "bread");
sandwish("bum", "cucumber", "sauces");
console.log("\n");
//question no 45
console.log("question no 45");
function createCar(features, model, year) {
    var car = {
        features: features,
        model: model,
        year: year,
    };
    return car;
}
var myCar = createCar('sunroof', 'toyota', 2022);
console.log(myCar);
