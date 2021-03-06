let myPosition = positions.groundPosition(pos(0, 0, 0));
player.say(myPosition);

let cubeSize = 5;
let width = 5;
let height = 6;
let length = 3;

player.onChat("buildBlock", function() {  
player.say("Start Placing Stone");
    for (let x =1; x <= width; x++){
        for (let y =1; y <= height; y++){    
            for (let z =1; z <= length; z++){
              let newPos = positions.add(myPosition, pos(x, y, z));
            player.say("My Position"+myPosition.toString() + "New" + newPos.toString() +" Cords" + newPos + " XYZ " + newPos.getValue(Axis.X)+ " "  + newPos.getValue(Axis.Y) + " "  + newPos.getValue(Axis.Z)  );
            blocks.place(BEDROCK, world(newPos.getValue(Axis.X) , newPos.getValue(Axis.Y), newPos.getValue(Axis.Z)));
            }
        }
    }
player.say("Done Placing Stone");
})


player.onChat("build", function() {
player.say("Start Placing Stone");

for (let z =1; z <6; z++){
blocks.place(BEDROCK, pos(0, 0, z));
}
player.say("Done Placing Stone");
})

player.onChat("buildBottom", function() {
    
player.say("Start Placing Stone");

for (let x =1; x <6; x++){
for (let z =1; z <6; z++){
blocks.place(BEDROCK, pos(x, 0, z));
}
}

player.say("Done Placing Stone");

// blocks.print("You're in Trouble!!!", LAVA, pos(0, 0, 0), WEST)
})
