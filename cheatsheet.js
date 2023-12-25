
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

console.log(typeof true); // returns "boolean"
console.log(typeof boolean); // returns "boolean"

// tells ya type of data

//-------------------------------------------//

var a = 100;
var b = 10;
var c = "10";

//arithmetic operators work with numbers to give single result

console.log(a + b); //110

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

var expression1 = (b == c); // stores true or false in a var
var expression2 = (a > b); // ditto

// Logical AND Operator
console.log(expression1 && expression2); //tells ya if both are true
// Logicial OR Operator
console.log(expression1 || expression2); //or tells you if one of them is true (shift + backslash button to the right of space and alt gr)
console.log(!expression1); //again ! makes it inverse

//-------------------------------------------//

var overWhelmed = 70;
var WantsToKillSelf = true;
var javascriptDifficulty = 50;

if (overWhelmed >= 80) //if this var value is bigger than 80 
//then this happenes
{
    console.log("jumps off bridge");
}
//if its not bigger than 80 then this happens
else if //if means you can tag another else on if it doesn't meet 2 requirements
    (javascriptDifficulty >= 60 && overWhelmed > 40) {
    console.log("lets do it")
}
else {
    console.log("not today compadre");
}
// rember can negae by outting ! between () before the var name

//-------------------------------------------//

var names = ["your nan", "my nan", "his aunt"]; // [] - basically multiple data types stored in a variable

console.log(names); //all
console.log(names[0]); //0 index so 0 is first entry not 1

names[2] = "his nan"; //replaces

console.log(names.length); //shows how many items


//-------------------------------------------//

for (initialization; condition; afterthought) {
    // CODEBLOCK
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}

for (var i = 0; i < 5; i++) {
    console.log("value of i: " + i);
}

//for loops, i = 0 means it starts at begining (zero index [0]), < 5 means loop stops at 4th loop (< 5 is not inclusive), i ++ adds "1" onto "i" meaning the loop moves onto the next "i" or index.

var bbcNonces = ["jimmy saville", "rolph harris", "garry glitter"];

for (var i = 0; i < bbcNonces.length; i++) {
    console.log("do not enter a hospital owned by these people: " + bbcNonces[i]);
};

//in this case last it means each time executed go to next item in the list

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

//now let's convert this into a piece of shit switch statements and break it down hammer time.

var sammyBoysNumber = prompt("i've had enough of the motha fockin' var's, in this motha fockin' script! Just put 1 or 2! give me an undefined input again motha fucka, i dare ya, i double dare ya!")

var colorConversion = parseInt(sammyBoysNumber)

switch (colourConversion) { //switch means it'll cycle through these options
    case 1: //in the case the input was 1
        alert("you picked red, bro"); //you'll get this input
        break; //means you smash a kitkat into the floppy disc tray because it's hungry and needs to break down the syntax after each command prior to starting a new one, think of break as an "else if"
    case 2:
        alert("you picked green, broseph");
        break;
    default: //anything other than our options will give a default think of this as final else
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
// EXTRAS SECTION //
//-------------------------------------------//

console.log(gangsterOGs.at(-1)); // will give you "EZ e"
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
// All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

// JavaScript uses type coercion in Boolean contexts.

// Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):

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
                                                    // returns "dog"

                                                    [] && "dog"
                                                    // returns "dog"


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

// TERNARY OPERATOR
CONDITION ? CODE : CODE; // all in one line ;)
!CONDITION ? CODE : CODE; // Short hand for CONDITION !== TRUE ?

// Ternaty operator is essentially a short hand for if statements - less lines of code
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
console.log(ternary2); // here we will return "I am more than 9"

let ternary3 = !ternary1 ? true : false; // ternary1 !== false ?

console.log(ternary3); // we will return true - num is not less than 9

// BONUS MINDFUCK

let ternary4 = num < 9 ? false : true; // here we switched around true : false - (false === true & true === false)

console.log(ternary4); // we will return TRUE - even though num < 9 === false - here we are saying false really equals true since the second block of code is the falsy one.
console.log(!ternary4) // we will return FALSE - ENJOY :)

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

// EXAMPLE

let y = 0; // initialization
let z = 0;

while (y < 3) { // condition
    y++; // afterthought
    z += y; // CODEBLOCK
}

// After the first pass: y = 1 and z = 1
// After the second pass: y = 2 and z = 3
// After the third pass: y = 3 and z = 6

console.log(y); // 3
console.log(z); // 6


// do...while loop

// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to FALSE.
// The condition is evaluated AFTER executing the statement, resulting in the specified statement executing at least once.

// PSEUDO

do
    STATMENT {
    } WHILE(CONDITION);

// EXAMPLE

let result = '';
let i = 0; // initialization

do {
    i = i + 1; // afterthought
    result = result + i; // CODEBLOCK
} while (i < 5); // condition

console.log(result); // Expected output: "12345"

// MAIN POINTS

// While loop
// Executes statement WHILE condition === TRUE
// Condition is evaluated BEFORE executing the statement

// do...while loop
// Executes statement UNTIL condition === FALSE
// Condition is evaluated AFTER executing the statement - (statementt will execute atleast once)

//*********************************************************************//

//! READY?

//*********************************************************************//

// METHODS

// In JavaScript we have Objects

// Examples of Objects: 

// Array of Arrays

const cars = [ [ 'Subaru', 'Toyota', 'Buick' ], [ 'Crosstrek', 'Prius', 'Encore' ], [ 2015, 2020, 2012 ] ];

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

// Object of Arrays

const website = {
    users: [ 'John', 'Mary', 'Tom' ],
    pages: [ 'Home', 'About', 'Contact' ]
};

// String Object 

const sTxt = "This is a test string";
const ssTxt = sTxt.substring(0,4);

document.writeln(ssTxt);
// The JavaScript engine converts the variable to an object, calls the method (substring()), and then reconverts the object back to a primitive variable.

// JavaScript methods are actions or functions that can be performed on objects.
// We can create our own methods or functions and store them as object properties.
// But Javascript Objects already come with some built in methods for our convenience
// There are many but here are some useful starting ones.

// String.prototype.split()

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings
// by searching for the pattern, puts these substrings into an array, and returns the array.
// In other words - the split() method converts a string into an array - this can be useful as we will see later :)

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' '); // notice the space between the " "
console.log(words[3]); // returns "fox"

const chars = str.split(''); // no space between the ""
console.log(chars[8]); // returns "k"

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
console.log('array1:', array1); // returns array1: ["three", "two", "one"]


// Array.prototype.join()

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
// separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator. ;)
// In other words - join() method converts an Array back to a String ;)

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); //  returns "Fire,Air,Water"

console.log(elements.join('')); // returns "FireAirWater"

console.log(elements.join('-')); // returns "Fire-Air-Water"

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