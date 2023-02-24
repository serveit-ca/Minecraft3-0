// There are my Cords (-21, -33, -295)




player.onChat("maze", function () {
    agent.teleportToPlayer()
    player.say("Starting the Maze!")
    agent.teleport(world(-21, -33, -295), WEST)
    player.say("Done TP")
    player.say(agent.getPosition())
    while (!(agent.detect(AgentDetection.Redstone, DOWN))) {
        player.say(agent.getPosition())
        solveMaze()
    }
})
function solveMaze () {
    player.say("Taking a Step to Solve")
    // If able to move left move left
    // if able to Move forward 1 step
    // if able to Move forward 1 step
    // if can't move left try to move right
    // do a 180
    // If blocked on all sides do a 180 and follow first step
    agent.move(DOWN, 1)

    if (!(agent.detect(AgentDetection.Block, LEFT)) && !(agent.detect(AgentDetection.Redstone, LEFT))) {
        player.say("1 - Able to move Left")
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
    } else if (!(agent.detect(AgentDetection.Block, FORWARD)) && !(agent.detect(AgentDetection.Redstone, FORWARD))) {
        player.say("2 - Able to move Forward")
        agent.move(FORWARD, 1)
    } else if (!(agent.detect(AgentDetection.Block, RIGHT)) && !(agent.detect(AgentDetection.Redstone, RIGHT))) {
        player.say("3 - Able to move Right")
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
    } else {
        player.say("4 - Doing a 180")
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
    }
}
