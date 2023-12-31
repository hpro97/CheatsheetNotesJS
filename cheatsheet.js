
//-------------------------------------------//

console.log("This is the log for the 🔥INLINE🔥 JavaScript");

// logs to console command, between quotations is a string, it's literal.

//-------------------------------------------//
<script src="script.js"></script>;

// links to external javascript. generally at bottom of body

//-------------------------------------------//

var plsKillMeIveHadEnoughJS;

// declares a variable name

var watchMeCode = "JS"; //string in quotes

var howManyHoursWillThisWeeksProjectTake = 72; //number or in this case integer, no quotes

// Uses assignment operator(=) to assign a value

watchMeCode = "how to hang yourself in JS";

//reassign variable just use vars name

//-------------------------------------------//

console.log(watchMeCode);

//use vars name to acces the stored var


console.log(watchMeCode + ": a useful snippet of info");

//you can display multiple things at once by concatenation

//-------------------------------------------//

var undefined; // No value asigned

var string = "string";

var integerNumber = 666;

var decimalNumber = 69.69;

var boolean = true; // or false

var nullValue = null; // In other words "no value" - sometimes used when we want to declare a variable but not give it a starting value. 
// It tells the developer that we have explicltly given the variable no value instead of just being "undefined"

//primitive data types: undefined, string, number, boolean, null. 

console.log(typeof true); // returns "boolean" - takes this value as a built in value inherent of javascript
console.log(typeof boolean); // returns "boolean" - takes this value to the assigned  value in line 50

//"typeof" tells ya type of data

//-------------------------------------------//

var a = 100;
var b = 10;
var c = "10";

//arithmetic operators work with numbers to give single result

console.log(a + b); //110 variable A + variable B in a maths equation because it's a number not a string like C

//can use + , - , / , *

console.log(a % b); // 0

//modulo gives remainder (what's left over after division) - also a way to find if a number is odd or even ;)

// Equality Operator
console.log(b == c); // double means not comparing type, so could use for a number and string - Under the hood JS converts the data types to check if they are equal value
// Inequality operator
console.log(b != c); // "!"" means opposite

// Stric Equality Operator
console.log(b === c); // triple is strict type, "10" isnt same as 10 - does not convert data types
// Strict Inequality operator
console.log(b !== c); // again "!"" is opposite

// Greater than Operator
console.log(a > b); //greater than
// Less than Operator
console.log(a < b); // less than

// Greater than or Equal to Operator
console.log(a <= b); // throw in an equal to or greater than to make things spicy
// Less than or Equal to Operator
console.log(a >= b);

//comparisons give true or false

var expression1 = (b == c); // stores true or false in a var. This would be true because they're both 10 even though one's a string and one is a number
var expression2 = (a > b); // ditto. This would also be true

// Logical AND Operator
console.log(expression1 && expression2); //and tells ya if both are true. this would be false, becuase we have a "true" and "false" value
// Logicial OR Operator
console.log(expression1 || expression2); //or tells you if one of them is true (shift + backslash button to the right of space and alt gr on UK keyboard)
console.log(!expression1); //again ! makes it inverse. this would be false, because the opposite of the value stored (true)

//-------------------------------------------//

var overWhelmed = 70; //stored number value (integer)
var WantsToKillSelf = true; //stored boolean value
var javascriptDifficulty = 50; //stored number value (integer)

if (overWhelmed >= 80) //if this var value is equal or greater than 80 (which it's not)
//then this happenes
{
    console.log("jumps off bridge");
}
//if its not bigger than 80 then this happens
else if //if means you can tag another else on if it doesn't meet 2 requirements
    (javascriptDifficulty >= 60 && overWhelmed > 40) { //this is true + false (remeber && checks for both to be true)
    console.log("lets do it") //so this doesn't happen in this case
}
else {
    console.log("not today compadre");
}
// rember you can negate by putting ! between () before the var name

//-------------------------------------------//

var names = ["your nan", "my nan", "his aunt"]; // [] - basically multiple data entries (in this case of the same type, a string) stored in a variable

console.log(names); //all
console.log(names[0]); //0 index so 0 is first entry not 1

names[2] = "his nan"; //replaces the third entry because 2 is the third number in a 0 index

console.log(names.length); //shows how many items


//-------------------------------------------//

for (initialization; condition; afterthought)

////intitialization is the start point (normally 0) 
//condition (we'll usually put i > "array".length) 
//afterthought (if moving onto next item in array it will be i++ so goes onto next item each time)

{
    // CODEBLOCK
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    //following ES6 standards

}

for (var i = 0; i < 5; i++) {
    console.log("value of i: " + i);
}

//Billy basics peasant's way of doing it, like moi (-Harry)

//for loops, i = 0 means it starts at begining (zero index [0])
//< 5 means loop stops at 4th loop (< 5 is not inclusive)
//i ++ adds "1" onto "i" meaning the loop moves onto the next "i" or index.

var bbcNonces = ["jimmy saville", "rolph harris", "garry glitter"];

for (var i = 0; i < bbcNonces.length; i++) {
    console.log("do not enter a hospital owned by these people: " + bbcNonces[i]);
};

//in this case last i means each time executed go to next item in the list

//-------------------------------------------//

alert("virus being installed, pls do not refresh this page"); //page popup in top

var wouldYouLikeThisVirus = confirm("so, would ya like a virus, son?"); // confirm for yes or no
// shows comfirm pop up as alert

var tellMeHowMuchYouWantIt = prompt("how badly d'ya want it?"); // can type in popup
// you could type SOFUCKENMUCH for example as opposed to click yes or no

alert(tellMeHowMuchYouWantIt);
alert(wouldYouLikeThisVirus);

// alerts notify you of result

//-------------------------------------------//

var input = prompt("please pick a number between 1-2"); //data type can be anything

var colourConversion = parseInt(input); //parseInt deconstructs input and if a string of numbers changes it to integer or number type

//lets go back to these cunty if statements

if (colourConversion === 1) //our translation of the promt made into number data type
{
    alert("¡escogiste: rojo, hermano!");
} else if //if our data input was not one but another number, then checks for this (or in this case 2)
    (colourConversion === 2) {
    alert("vi elektis: verda, frato!");
} else  //anything other than 1 or 2 will be this final statement
{
    alert("du hast keine zahl zwischen eins und zwei gewahlt, bruder!");
}

//now let's convert this into a piece of shit switch statement and break it down hammer time.

var sammyBoysNumber = prompt("i've had enough of the motha fockin' var's, in this motha fockin' script! Just put 1 or 2! give me an undefined input again motha fucka, i dare ya, i double dare ya!")

var colorConversion = parseInt(sammyBoysNumber)

switch (colourConversion) { //switch means it'll cycle through these options
    case 1: //in the case the input was 1
        alert("you picked red, bro"); //you'll get this input as an alert
        break; //means you smash a kitkat into the floppy disc tray because it's hungry and needs to break down the syntax after each command prior to starting a new one, think of break as an "else if" but still needed prior to 
    case 2:
        alert("you picked green, broseph");
        break;
    default: //anything other than our options will give a default think of this as final else (remember break is still needed even if you're thinking of this as a final "else" statement)
        alert("he's not the messiah, he's a very naughty boy!");
}

//-------------------------------------------//

//here's some extra shizzle regarding advanced stuff we threw into the mix, my nizzle 

var gangsterOGs = ["dogg", "cent", "pac", "EZ e"]; //just an array

var ogLength = gangsterOGs.length; //you can assign a variable to a defined length

for (var z = 0; z < ogLength; z++) { //to then use it instead of "gangsterOGs.length"

    console.log(gangsterOGs[z]); //z would be the variable of each time the for loop runs relating to our gangsterOGs list, it would print each time for all our OGs
}

if (gangsterOGs[z].charAt(0) === "d" || gangsterOGs[z].charAt(2) === "c") {
    alert("this is either la da da da dah the moffa fucken D O double G, or the main g 2Pac!");
} else if (gangsterOGs[z].charAt(0) === "c") {
    alert("cent in the house");
} else {
    alert("EZ e turnin' dat shit uppppp!");
}

// as you can see the power of westside gangster rap can be represented through .charAt(x) to specify a character from an array, first specifying our array with gangsterOGs[z] 
// because we want it for each time the loop runs on an individual OG from our array, followed by .charAt to specify a charadcter (in this case a letter) in each element of our array. 
// remember to tag on (x) to choose which letter,number or sign you want (0), (2), (213). Remember our 0 index so it starts at 0 not 1.
//-------------------------------------------//



// Math is a funciton that does a fucktonne of math operations basically
// heres some examples

console.log (Math.random());

// math.random will pick a random number between 0-1

console.log (Math.round(1.6));

// math.round () will round to nearest whole number, either up or down
// math.ciel () will round up
// math.floor () will round down

var colors = ["blue", "red", "green"];

while(true) {

var randomIndex = Math.floor(math.random() * colors.length);

alert(colors[randomIndex]);
}

// chose floor here because of 0 index, so we get 0,1 or 2
// so first math.random will pick random number between 0-1
// times it by colors.length (0,1,2) so 3
// and rounds it down so that it is between 0-2

// then an alert will do (saved in randomIndex) to corrolate to one of our colors within the 0 index
// 0 for blue, red for 1, 2 for green
// the alrt takes affect and reads one of our colors picked at random

//-------------------------------------------//
// EXTRAS SECTION //
//-------------------------------------------//

console.log(gangsterOGs.at(-1)); // will give you "EZ e" (-1 will be last on list)
console.log(gangsterOGs[gangsterOGs.length - 1]); // will give you "EZ e"

var harrys = ["harry1", "harry2", "harry3"];

for (const harry of harrys) {
    console.log("hello" + harry)
};  //called "for...of", substitutes the need to write a for loop defining ++1 and length

//else is only used as a final and with no condition, if you provide conditions needs to be else if

//null can be used as a condition in various scenarios


//***********************************************//

//! CAUTION - Beyond this point there is no return

//***********************************************//

// Falsy or Truthy concept

// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. 

var sebsLegendStatus = true

// In this case Seb's LegendStatus is "True"

// All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

// JavaScript uses type coercion in Boolean contexts.

// This means different data types will be automatically converted for this type of opperation, think of it as 10 == "10", so a string and a number type will be compared with == as opposed to ===

// Example of our assigned var in use with falsy or truthy concept

if (sebsLegendStatus) // Imagine by default there's a true value before () to help visualize what's happening

// Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):

// These are innate values we havn't defined and are true by default

if (true)
    if ({})
        if ([])
            if (42)
                if ("0")
                    if ("false")
                        if (new Date())
                            if (-42)
                                if (12n)
                                    if (3.14)
                                        if (-3.14)
                                            if (Infinity)
                                                if (-Infinity) // yep...

                                                    // The logical AND operator, &&

                                                    // If the first operand is truthy, the logical AND operator returns the second operand:

                                                    true && "dog"
                                                    // because we have a true, returns "dog", if it were FALSY, for exmple false && "dog" we'd have no dog "that's ruff" *teardrop*

                                                    [] && "dog"
                                                    // returns "dog" (reference line 303, we can see this [] is innately true)


//**************************************************************************//

// Ternary Operator

// Ternary Operator functions similarly to an if statement where by we give a condition, and if met, executes that BLOCK of code. 

// IF STATEMENT
if (CONDITION) {
    CODE BLOCK;
} else if (CONDITION) {
    CODE BLOCK;
} else {
    CODE BLOCK;
}

//REFERENCE LINE 111 FOR THIS EXAMPLE

var overWhelmed = 70;
var WantsToKillSelf = true;
var javascriptDifficulty = 50;

if (overWhelmed >= 80)
{
    console.log("jumps off bridge");
} else {
    console.log("not today compadre");
}

// we could simplify this by writing:

(overWhelmed >=80) ? console.log("jumps off bridge") : console.log("not today compadre");

// remeber we can swap dis shid up but need to change ored because the first ternery operator is for true

if (overWhelmed >= 20) {
    var imOverwhelmed = true;
}

(!imOverwhelmed) // esentially stored data is now false
? // just because we need this for ternery after conditon
console.log("not today compadre") // will happen under a true scenario (in this case we have false)
:
console.log("jumps off bridge") // will happen under a false scenario (like now)

// TERNARY OPERATOR
CONDITION ? CODE : CODE; // all in one line ;)
!CONDITION ? CODE : CODE; // Short hand for CONDITION !== TRUE ?

// Ternary opperator is essentially a short hand for if statements - less lines of code
// If the condition is met, the first code (on the left) is executed otherwise falls to the second code (right side) by default. A little bit like true or false.

CONDITION ? TRUE : FALSE;

// Ternary Operators can also be chained much like if / else if statements

CONDITION ? CODE // like an if statement
    : CONDITION ? CODE // like an else if
        : CODE; // like an else - Defaults to last code if previous conditions not met

// EXAMPLES

let num = 10;

let ternary1 = num < 9 ? true : false;

let ternary2 = num < 9 ? "I am less than 9" : "I am more than 9";

console.log(ternary1); // here we will return false 

// *Harry's Handy tips for simple pricks (like myself)* 
// because the second statement is when the condition is false (or not met, like in this scenario)

console.log(ternary2); // here we will return "I am more than 9"

// *Harry's Handy tips for simple pricks
// because ternary2 (10 < 9 is false) it will say "i am more than 9" (the value we assigned in the case our statement was false)

let ternary3 = !ternary1 ? true : false; // ternary1 !== false ?

// ternary1 is an assigned false value
// the opposite of ternary1 (so !ternary1) would be true
// this statement is essentially saying "our new value, ternary3" will be true, beacuse the opposite of ternary1 (!) is true, so we will assigne true to this new value, because the statment is "TRUTHY"

console.log(ternary3); // we will return true - num is not less than 9 (because our ! on line 403 negates our false value making it true)

// BONUS MINDFUCK

let ternary4 = num < 9 ? false : true; // here we switched around true : false - (false === true & true === false)

console.log(ternary4); // we will return TRUE - even though num < 9 === false - here we are saying false really equals true since the second block of code is the falsy one.
console.log(!ternary4) // we will return FALSE - ENJOY :)

// *Harry's Handy tips for simple pricks
// ternary4 = num < 9 ? false : true; 
// ternary4 = 10 < 9 (would be falsy)
// ternary4 = 10 < 9 ? false (this would apply to the truthy statement because it's first)
// ternary4 = num < 9 ? false : true (this would apply to the falsy statement because it's second) *even though we've assigned different value to apply*
// our original statement 10 < 9 is falsy so it would apply to the second which is truthy statement, with the value we've assigned, in this case "false"

//**************************************************************************//

// While / do...while loops

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to TRUE. 
// The condition is evaluated BEFORE executing the statement.

// Traditional for loop
for (initialization; condition; afterthought) {
    // CODEBLOCK
}

// while loop

let x = 0; // initialization

while (x < 3) { // condition
    x++; // afterthought
    // CODEBLOCK
}

console.log(n); // Expected output: 3

//will go through x[0], x[1], x[2]

// EXAMPLE

let y = 0; // initialization
let z = 0;

while (y < 3) { // condition
    y++; // afterthought
    z += y; // CODEBLOCK
}

// *Harry's Handy tips for simple pricks
// += adds the value of y onto z

// After the first pass: y = 1 and z = 1 (adds 1 from y onto 0 of Z)
// After the second pass: y = 2 and z = 3 (adds 2 from y onto 1 of z, so 3)
// After the third pass: y = 3 and z = 6 (adds 3 from y onto 3 of z, so 6)

console.log(y); // 3
console.log(z); // 6


// do...while loop

// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to FALSE.
// The condition is evaluated AFTER executing the statement, resulting in the specified statement executing at least once.

// PSEUDO

do { 
    CODE BLOCK
} while (CONDITION);

// EXAMPLE

let result = ''; // '' will mean no spaces, added result directly after first result
let i = 0; // initialization

do {
    i = i + 1; // afterthought
    result = result + i; // CODEBLOCK
} while (i < 5); // condition

console.log(result); // Expected output: "12345"

// *Harry's Handy tips for simple pricks
// first loop will be 0 + 1 for i , giving result of one, making 1 added to result string
// second loop will be 1 + 1 for i, giving result of 2, adding 2 to result string, result string is now 12
// this will loop until the result of i is 5, adding the final 5 onto result string
// so the string result total will be 12345

// MAIN POINTS

// While loop
// Executes statement WHILE condition === TRUE
// Condition is evaluated BEFORE executing the statement

// do...while loop
// Executes statement UNTIL condition === FALSE
// Condition is evaluated AFTER executing the statement - (statement will execute atleast once)

// *Harry's Handy tips for simple pricks
// meaning the final entry for i will be 5 adding the final result total of 5, making it 12345, before deciding not to execute again because i has reached 5

//*********************************************************************//

//! READY? intermediate JS incomming

//*********************************************************************//

// METHODS

// In JavaScript we have Objects

// Examples of Objects: 

let people = {
    name: "harry",  //property is whole statement, key-value pairs are the individual statements
    age: 26,
    health: "currently on last legs",
    nearDeath: true,
};

//to access property values of a basic information type (string, number, boolean) use dot notation

console.log(people.nearDeath);

//use bracket notation for same effect

console.log(people["age"]);

//you can use dot functions to create object arrays for keys,values and entries

console.log(Object.keys(people)); //logs exclusively keys (name,age,health,nearDeath)
console.log(Object.values(people)); //logs exclusively values of said keys (harry, 26, currently on last legs, true)
console.log(Object.entries(people)); //logs entries of said object (name: harry, age: 26, etc)

// Array of Arrays

const cars = [ [ 'Subaru', 'Toyota', 'Buick' ], [ 'Crosstrek', 'Prius', 'Encore' ], [ 2015, 2020, 2012 ] ];

// *Harry's Handy tips for simple pricks
// various arrays forming an array in this case cars

// Object of Objects

const account = {
    user: {
        firstName: 'John',
        lastName: 'Doe',
        password: 'abcdefg',
        address: {
            street: '123 First Ave',
            city: 'Anywhere, USA',
            zip: 12345
        }
    },
    balance: {
        checking: 25000,
        savings: 100000
    }
};

// *Harry's Handy tips for simple pricks
// the object being "account" with sub-objects being "user" containing sub-sub-objects, some of those even containin sub-sub-sub objects. and "balance" containing more sub-objects.

// Array of Objects

const planets = [
    {
        name: 'Earth',
        moons: 1
    },
    {
        name: 'Mars',
        moons: 2
    },
    {
        name: 'Jupiter',
        moons: 79
    },
    {
        name: 'Saturn',
        moons: 82
    }
];

// *Harry's Handy tips for simple pricks
// there's individual objects inside the array of planets
// these objects are an individual object with (a name value of earth, with a moons value of 1.) you could assign this an object called earthInfo for example.
// and so forth, until saturn.

// Object of Arrays

const website = {
    users: [ 'John', 'Mary', 'Tom' ],
    pages: [ 'Home', 'About', 'Contact' ]
};

// *Harry's Handy tips for simple pricks
// object is website
// arrays are users and pages
// users array contains 3 strings, same as pages
// these arrays correlate through the index (i.e i[0] of users would be john, whilst the i[0] for pages would be home)

//if you define a variable before hand globally it can be referenced locally

let milks = ["prostate", "pregnant elefant", "none"]

let filthMix = {
    name: 'Warm water with questionable milk',
    price: 6.5,
    isIced: true,
    withSugar: true,
    milks: milks
};

let coldBrew = {
    name: 'Cold Brew',
    price: 6,
    withSugar: false
};

const drinks = [coldBrew, filthMix]

let menu = {
    drinks: drinks, // referencing our global defined drinks const
    food: ["toast", "sausages", "hashbrown"], // adding new array inside of our objects array
    milks: milks
}

// -------------------------------- bonus ------------------------------//

for (const key in menu) { //first anything we replace for key will work, it's just the name (remember "key" is what we're defining, this would relate to drinks, food and milks)

    console.log("menu." + key // this will take our literal keys (we haven't defined as a variable but this is innate and will know we're refering to whatever we deined as key in our menu)
    + "= " + menu[key]); // here we are taking the menu object and specifying that we want to display the value (now our key inside of menu) of our menu object
    // if we just wrote + [key] (instead of menu[key]) it would display our original key drinks, food, milk
}
//this will iterate through each key IN our for loop of objects, hence the for...in loop

//a method lives inside of an object so console.log() is a method
//if it's a function it doesn't live inside of an object, like iterate()
//knowing this if we wanted to display all the keys inside of coldBrew we could do this

console.log(Object.keys(coldBrew));

//referencing when we discussed keys, values and entries, we could apply this to just give uis the values for example

console.log(object.values(coldBrew));

//template literal has backtick to start and end `` allowing you to not have to open and close literal strings and call functions and operations without opening and closing a string. for example

console.log(`our milks available are ${milks}, why not add one to your ${coldBrew.name}, two would cost you ${coldBrew.price + coldBrew.price}, 3 would be ${coldBrew.price * 3}`);


//--------------------------------- END OF LESSON 1 ------------------//


//--------------------------------- LESSON 2 FUNCTIONS------------------//

// defining array for example
var brands = ["Acer", "Apple", "Sony", "Samsung"];
var heroes = ["Black Panther", "Cyborg", "Black Canary", "Donna Troy", "Huntress", "Blue Beetle", "Captain Atom"];

// function structure
function print(arr) { //function (what is it) print (our name for the function) arr (what we will be feeding into function, in this case we'll use it for  different arrays, so arr, when in use we'll replace arr with X, or whatever array specifically we are using it for)
    for (let i = 0; i < arr.length; i++) { //basic for loop happens on array we feed in
        console.log(arr[i]); //takes the array and states the value of each index in said array (acer, apple, sony, etc {for brands array})
    }
    console.log(`--------------`); //console logs ---------- after array
};

print(brands); //feeds in brands array to function named print and called to run
print(heroes)

//function declarations is declared directly after function

function declareHello() { //notice in this case we left it blank, we're not feeding anything into the function, it's doing something self contained
console.log(`Hiya, i'm a function declaration`);
};

//function expression is contained in something for example a variable, we can still call them to run

let expressHello = function() { //let defined as a function
    console.log(`Hiya, i'm a function expression`);
};

//remember to call to run

expressHello();

function returnValue() { //declare function
    var result = 2 + 3; //define a variable locally (inside function) in this case containing an equation
    return result; //return will stop the function and store the data
};

console.log(returnValue()); // will log 5

var value5 = returnValue() //uses function to declare var value
console.log(value5); //logs var

// you could stop a function with return for an if statement as a handy example

function checkBool() { //defining function name only
    let x = false; //declaring internal variable as false
    if (x === true) { //if statement
        console.log(`we stopped the function`);//logs if the if statement was truthy, (in this case it wasn't so will not display console log)
        return; //return doesn't happen because if statement was not met
        console.log(`this code does nothing`);//does nothing because after return
    }else{
    console.log(`the function happened because x is not true`);
    }
};

let additionResult = returnValue(); //define our variable to store output of function
console.log(`this should give us 5, drum roll please..... ${additionResult}`); //logs the output stored from variable after executing the function

checkBool(); //nothing prints because if statement was not met

var width = 10; //defining var globally outside of function
var height = 10;
function areaCalc(width, height){//what variables are we feeding in
    let area = 0; //define initial var
    area = (width * height); //this makes our var update to what we feed into function * the other
return area;} //returns a value of var

console.log(areaCalc(width,height)); //console logs function applied on width and height variables (10 * 10) so function value will be 100 in this case, and log will print 100

function myValuesAre(x,y,z) { //these are parameters we're naming to give the function
console.log(`my values are ${x} ${y} ${z}`); //takes parrameters
return;//return stores the value and makes happen 
}

//declaring vars for use on function, these are globally defined and can be used in any function, if locally defined then they are only used inside the function and not stored outside, such as "let area = 0" on line 767
var me1 = "me1";
var number2 = 2;
var trueStatement = true;

//feeding in these vars
myValuesAre(me1, number2, trueStatement);
//x is now a copy of me1, y is copy of number2, etc exlcusively for functions use, not outside of function

//feeding in directly no vars
myValuesAre(7, "hello", false)
//note these are now assigned to var x,y,z. exlcusively for functions use, not outside of function

function add(x) { //takes a number we will feed it when it runs
    if (x < 10) {
        console.log(x + 1);
    } else {
        console.log(x - 3);
    }
    return;
}

add(7); //will log 8 due to our if statement


//-------------- END OF LESSON 2 FUNCTIONS (up to and including 05-02-06)------//

//----------------------- Lesson 3 + 4  ----------------------------//

//reference local and globally defined for first part of this lesson
//defining outside of function is global, inside is local
//you can call global variables and such from inside funcitons but not viceversa

var say2 = 2;

function say2() {
    console.log(say2);
};

//you can define things inside of functions but only local use

function say3() {
    var say3 = 3;
    console.log(say3);
};

// The default keyword "this" refers to the global object
// In a browser, the global object is the Window 

var planet = {
    name: "Earth",
    moons: 1,
    // Objects can store arrays in a key-value pair
    neighboringPlanets: ["Mars", "Venus"],
    // Objects can also store methods
    tellFunFact: function () {
      console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
    },
    logMoons: function () {
        console.log(`earth has ${this.moons} many moons`); //inside of objects this will refer to what you're refering to's parent
    }
};
// To access a value in an array, use the name of the object, the key and the index. reference lines 566 for use of dot and bracket notation

console.log(planet.neighboringPlanets[0]);

// To call a method, use the name of the object and the key. Don't forget the ()!
planet.tellFunFact();

//more examples of "this" with a rundown of functionality in the code

console.log(this); //logs window, this used globally refers to window in browser

var child = { //defining variable called child
  age: 10, // defining and object inside of variable with a value of 10
  ageTenYears: function () { //object containing function
    console.log(this.age + 10); //this function logs this (in this case variable child).age + 10, so 20 if you were to run this function
  },//closes function
};//closes variable

var investor = { //defining variable
  name: 'Cash Saver', //objects inside variable with value of string "Cash Saver"
  investment: { //object inside variabler opening up other sub ojects contained here
    investmentGrowth: function () { //sub object var investor/investment/investmentGrowth containing a function
      console.log(this.initialInvestment * 1.15); //inside this function it logs  this as (what contains this variable contianing a function, in this case investment with a suboject class of initialInvestment) in other words the value of 5000, and multiplies it by 1.15 to store the value as what is printed inside the console log function when this function is called
    },//closes function
  },//closes investment sub object
};//closes investor variable

var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort(); //alphabetical overwrites as new array in var

arithmaticOperators.push("%"); //push adds to end of array and overwrites

var logicalOperatorsSliced = logicalOperators.slice(0,2); //slices index starting at 0 and ends at 2 (before start 2), so only displays 0+1, doesn't change original array

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", "World"); //searches for defined in [0] and replaces with new in [1], doesn't change original

var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

constellations.unshift("Canis Major");
//adds at beginning of array and overwrites

planets.slice(0,5)
//cutts out index 0-5 (not including 5)

var galaxy = constellations.concat(planets);
//concat joins multiple arrays together and stores in new array, doesn't overwrite

var starCap = star.replace("polaris", "POLARIS");
//self explanatory, replaces 


var numbers = [1, 2, 3, 4]

numbers.forEach(lessThanThree)//for each will apply on each object of an array, often used in conjuction with a funciuton.

function lessThanThree(i) {
  if (i < 3) {
    console.log(i.toString() + ' is less than 3');
  } else {
    console.log(i.toString() + ' is NOT less than 3');
  }
}

var originalArray = [1, 3, 2, 5, 10]; //defined array into variable

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 

var doubledArray = originalArray.map(function(data) { //defining a variable and assigning an (array to the map function {which creates a new array calling the following function to be applied to every element of the array} and the function applied to all of this is fed in what we've defined at "data"). In other words we've defined the data type we're feeding into a function, then applying that function to an already specified array and using tthe map function to make sure we apply it to every element in said array using the map function, with a final step of creating everything we've eapplied on the OG array into a new array, stored as a variable called doubleArray
  
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.

  return data * 2; //the data that is returned (and coincidentally the actual use of our function) is whatever we've feeded into the function {(OG array) *2}
});

var oddOrEven = originalArray.map(function(num) { //we've defined a variable called oddOrEven, to that variable we've assigned a process that does this (whatever we're doing will be assigned with map function to a new array called oddOrEven, taking information from our OG array, then to that object we're creating will be subjected to a function that we'll feed in numbers as the data type. in said function we're applying will be and if statement described below)
    if (num % 2 === 0) {//each individual number fed into our function from the OG array will be tested to see if it has a remainder when divided by two, if said remainder is 0 (in other words, the data is even)
      return 'even'//then we return a string called even
    } else {//otherwise
      return 'odd'//we return a string called odd
    }
  });
  
  //our oddOrEven var will be:
  
  // var oddOrEven = ["odd", "odd", "even", "odd", "even"]
  


  var numbers = [2, 4, 6, 8, 10, 12];

  var planets = [
    {
        name: 'Earth',
        moons: 1
    },
    {
        name: 'Mars',
        moons: 2
    },
    {
        name: 'Jupiter',
        moons: 79
    },
    {
        name: 'Saturn',
        moons: 82
    }
  ];
  
  // Filtering Methods
  
  // Find
  console.log(numbers.find(function(i) {
    return i > 10 
  }))
  
  //starting from end (reverse engineering and run through)
  //return i > 10 looks at number we're feeding into the function and decides if it is greater than 10
  //(i) is a value we're defining for use inside of our function, it applies to the number we're feeding into the function and the function itself replaces i with our number that we're feeding in.
  //(function) encapsulates everything we've looked at so far in this definition. it's a callback function
  //.find is a method that lets us take the array i'm about to mention and it allows you to search for a specific element in said array, applying a condition we define inside our function, in this case >10
  //numbers is our array we're applying to our method find (with set parameters stating only return if our number is greater than 10)
  //all this will take our numbers array, find the first number greater than ten such as stated in our function. return a value of 12 after iterating the whole array and only finding the final entry [5] index with a value of 12.
  //console log will print the returned value of 12
  //.find is a method that lets us take the array i'm about to mention and it allows you to search for a specific element in said array, applying a condition we define inside our function, in this case >10
  
  //read this beginning to end to check you understood it
  
  console.log(planets.find(function(i) {
    return i.moons > 10
  }))
  
  //applies same logic onto planets array, specifically looking at what value we have stored for number of moons on each object in array
  //will return jupiter because it's the first object in the array that meets our criteria beacuse it has 72 moons, the previous objects have less than ten
  
  // Filter
  console.log(numbers.filter(function(i) {
    return i >= 10
  }))
  
  //The filter() method creates a new array filled with elements that pass a test provided by a function.
  //takes our numbers, applies similar logic similar to previously stated in .find but instead gathers all the entries from the array that meet our criteria (in this case 10 and 12), makes them into a temporary array that isn't stored and applies consol.log to display that array of those 2 entries, without storing them permanently
  
  console.log(planets.filter(function(i) {
    return i.moons > 10
  }))
  
  //applies same logic as previously stated and returns jupiter and saturn instead of just the first one like in .find, because we're using .filter
  

//---------------------------- end of unit ---------------------- //

//---------------------------------- bonus -----------------------//

// String Object 

const sTxt = "That is a test string"; //we're assigning a string value to an object
const ssTxt = sTxt.substring(0,4); //this takes "that" from our string and assigns it to ssTxt

console.log(ssTxt); // will read "that"
// The JavaScript engine converts the variable to an object, calls the method (substring()), and then reconverts the object back to a primitive variable.

// *Harry's Handy tips for simple pricks
// this means it takes our ssTxt with a value of "That" and makes it it's own variable assigned a string value of "That"

// JavaScript methods are actions or functions that can be performed on objects.

// *Harry's Handy tips for simple pricks
// Just like we did a seccy ago with our substring that now has a value of "That"

// We can create our own methods or functions and store them as object properties.

// *Harry's Handy tips for simple pricks
// for example you could make each word from sTxt a substring like we did on line 595 by putting multiple "const ssTxt = sTxt.substringx(x,x)" together under an umbrella function of "sentenceBreakdownByWord", breaking down each individual work in our parent string "This is a string" via hardcoding each line.

// But Javascript Objects already come with some built in methods for our convenience
// There are many but here are some useful starting ones.

// String.prototype.split()

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings
// by searching for the pattern, puts these substrings into an array, and returns the array.
// In other words - the split() method converts a string into an array - this can be useful as we will see later :)

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' '); // notice the space between the " "
console.log(words[3]); // returns "fox" // remeber 0 index so this would be the forth word // 0, 1, 2, 3

const chars = str.split(''); // no space between the ""
console.log(chars[8]); // returns "k" // this also takes into account spaces as characters

const strCopy = str.split(); // no ""
console.log(strCopy); // returns Array ["The quick brown fox jumps over the lazy dog."]

// Array.prototype.reverse()

// The reverse() method of Array instances reverses an array in place and returns the reference to the same array, 
// the first array element now becoming the last, and the last array element becoming the first.
// In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1); // returns array1:" ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed); // returns reversed: ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1); // returns array1: ["three", "two", "one"] // we've already returned a reverse function on our array, once this happens our new value of the original array is overwritten.


// Array.prototype.join()

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
// separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator. ;)
// In other words - join() method converts an Array back to a String ;)

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); //  returns "Fire,Air,Water" // takes the full array, each individual item with be with commas.

console.log(elements.join('')); // returns "FireAirWater" // remember no space on line 632

console.log(elements.join('-')); // returns "Fire-Air-Water" // we specified a character "-" to go between each item in the array

//******************************************************************//

//! I CHALLENGE YOU!

//******************************************************************//

// Putting it all together

// How can we use these loops and method in a practical setting?

// THE PALINDROME CHALLENGE

// Palindrome: a word, phrase, or sequence that reads the same backwards as forwards, e.g. "madam" or "nurses run"

// Challenge: I want a program that checks if a given STRING is a Palindrome and returns TRUE or FALSE

// FIRST Try completing the challenge with loops and what we have learnt so far in class

// Then try with methods (Can do it with the methods mentioned above)

// Let me know if you get stuck - Seb Z.G

// Here is some starter code

const myWord1 = "I love to Code"
const myWord2 = "kayak"
const myWord3 = "TacOcaT"