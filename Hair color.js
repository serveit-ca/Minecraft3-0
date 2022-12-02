player.onChat("run", function () {
	
})
// #1 - Create a coding projet in Minecraft 
// #2 - Create 4 variables 
// #3 - 1 Variable is Name - Set it to your name 
let name = "Mr Tymos";
// #4 - 1 Variable is Hair color - Set it to your hair color 
let hair_color = "Brown";
// #5 - 1 Variable is Age - Set to 0 
let age = 0;
// #6 - 1 Vaiable is do you like chicken - Leave Blank 
let likeChicken = true;

age = randint(1,100); // Add this 

player.say("Your age is : "+ age) // add this

if (age >= 32 && hair_color == "Brown"){
    player.say("your Old and have a bad hair line");
}else { // add this and below 
    // than this happens 
    player.say("You have great looking hair and just need to dye it pink! ")
}


