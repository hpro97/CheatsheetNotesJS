
//-------------------------------------------//

console.log ("This is the log for the 🔥INLINE🔥 JavaScript");

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

//you can display multiple things at once by addition

//-------------------------------------------//

var undefinedHere;

var stringz = "string";

var integerNumber = 666;

var decimalNumber = 69.69;

var boolz = true; // or false

//primitive data: undefined, string, number and boolean

console.log(typeof true); //could be "string", 666 , 69.69 , undefinedHere, stringz, integerNumber, decimalNumber, boolz

// tells ya type of data

//-------------------------------------------//

var a = 100;
var b = 10;
var c = "10";

//arithmetic operators work with numbers to give single result

console.log(a + b); //110

//can use + , - , / , *

console.log(a % b); // 0

//modulo gives remainder (what's left over after division)

console.log(b == c); // double means not comparing type, so could use for a number and string
console.log(b != c); // ! means opposite

console.log(b === c); // triple is strict type, "10" isnt same as 10
console.log(b !== c); // again ! is opposite

console.log(a > b); //greater than
console.log(a < b); // less than

console.log(a <= b); // throw in an equal to or greater than to make things spicy

//comparisons give true or false

var expression1 = (b == c); // stores true or false in a var
var expression2 = (a > b); // ditto

console.log(expresion1 && expression2); //tells ya if both are true
console.log(expresion1 || expression2); //or tells you if one of them is true (shift + backslash button to the right of space and alt gr)
console.log(!expresion1); //again ! makes it inverse

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

var names = ["your nan", "my nan", "his aunt"]; // [] for arrays, basically multiple strings stored in a var

console.log(names); //all
console.log(names[0]); //0 index so 0 is first entry not 1

names[2] = "his nan"; //replaces

console.log(names.length); //shows how many items


//-------------------------------------------//

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (var i = 0; i < 5; i++) {
    console.log("value of i: " + i);
}

//for loops, i = 0 means it starts at bagining of var list, < 5 means loop stops if theres more than 5 entries, i ++ means each time the code were running repeats it adds one each time so in other words moves onto next item in the array

var bbcNonces = ["jimmy saville", "rolph harris", "garry glitter"];

for (var i = 0; i < bbcNonces.length; i++) {
    console.log ("do not enter a hospital owned by these people: " + bbcNonces[i]);
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
    alert ("vi elektis: verda, frato!");
} else  //anything other than 1 or 2 will be this final statement
{
    alert ("du hast keine zahl zwischen eins und zwei gewahlt, bruder!");
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
    alert ("EZ e turnin' dat shit uppppp!");
}

//as you can see the power of westside gangster rap can be represented through .charAt(x) to specify a character from an array, first specifying our array with gangsterOGs[z] because we want it for each time the loop runs on an individual OG from our array, followed by .charAt to specify a charadcter (in this case a letter) in each element of our array. remember to tag on (x) to choose which letter,number or sign you want (0), (2), (213). Remember our 0 index so it starts at 0 not 1.

//-------------------------------------------//
