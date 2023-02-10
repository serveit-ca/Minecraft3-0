
// Define Cube sizes
let cubeSize = 5;
let width = 5;
let height = 25;
let length = 5;

// get the current position.
player.onChat("buildBlock", function () {
    player.say("Start Placing Stone");
    let myPosition = positions.groundPosition(pos(0, 0, 0));
    for (let x = 1; x <= width; x++) {
        for (let y = 1; y <= height; y++) {
            for (let z = 1; z <= length; z++) {
                let newPos = positions.add(myPosition, pos(x, y, z));
                player.say("My Position" + myPosition.toString() +
                    "New" + newPos.toString() + " Cords" + newPos +
                    " XYZ " + newPos.getValue(Axis.X) + " "
                    + newPos.getValue(Axis.Y) + " "
                    + newPos.getValue(Axis.Z));
                blocks.place(BEDROCK, world(newPos.getValue(Axis.X),
                    newPos.getValue(Axis.Y), newPos.getValue(Axis.Z)));
            }
        }
    }
    player.say("Done Placing Stone");


})



