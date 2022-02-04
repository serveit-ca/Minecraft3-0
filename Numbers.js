// This is the first piece of code i am writing in term 3

/* 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
*/

let text;

text = "A really big Jump";
// player.say(text);

text = "A Really Small Jump ";

// player.say(text);

text += "A Really Long Jump";

// player.say(text);

// Here we have created a variable called num 
let num;

num = 24;

// Mulitple by 20
num = num * 20;
// Divide by 40
num = num / 40;
// Add 100
num = num + 100;
// Minus 6520
num = num - 6520;
player.say("The ending Number is: " + num);

num = 0;

if(num > 0 ){
    player.say("The Number is Positive");
} else if ( num == 0 ) {
     player.say("The Number is Zero");
} else {
    player.say("The Number is Negative");
}
