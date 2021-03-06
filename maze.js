player.onChat("maze", function () {
    agent.teleportToPlayer()
    player.say("Starting the Maze!")
    agent.teleport(world(-33, 3, 1117), WEST)
    player.say("Done TP")
    player.say(agent.getPosition());
    
    while (agent.getPosition() != world(-26, 3, 1117)) {
        player.say(agent.getPosition());

        solveMaze();
    }
})
function solveMaze () {
    player.say("Taking a Step to Solve")
    // if able to Move forward 1 step
    if (!agent.detect(AgentDetection.Block, FORWARD) 
    && !agent.detect(AgentDetection.Redstone, FORWARD)) {
        player.say("1 - Able to move Forward");
        agent.move(FORWARD, 1);
    // If able to move left move left
    } else if (!agent.detect(AgentDetection.Block, LEFT) 
    && !agent.detect(AgentDetection.Redstone, LEFT)) {
        player.say("2 - Able to move Left");
        agent.turn(TurnDirection.Left);
        agent.move(FORWARD, 1);
    // if can't move left try to move right
    } else if (!agent.detect(AgentDetection.Block, RIGHT) 
    && !agent.detect(AgentDetection.Redstone, RIGHT)) {
        player.say("3 - Able to move Right");
        agent.turn(TurnDirection.Right);
        agent.move(FORWARD, 1);
    // do a 180
    } else {
        player.say("4 - Doing a 180");
        agent.turn(TurnDirection.Left);
        agent.turn(TurnDirection.Left);

            // If blocked on all sides do a 180 and follow first step

    	
    }
}
