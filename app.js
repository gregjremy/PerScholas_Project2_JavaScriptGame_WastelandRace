// ******************************NOTES******************************

// The game, by default will be 1v1- the user vs 1 AI. If time permits I would like to add up to 2 more players,
// and an ability for opponents to be human controlled instead of AI



// ******************************PLAYERS******************************

// ***************Class Template***************
class Player{
    constructor(name, playerPosition){
        this.name = name
        this.playerPosition = 0
    }

    rollGameDie(){              //Method to determine Move
        let roll = Math.floor(Math.random() * (7 - (-2))) + (-2);     // 'roll' generates a number (-2)-6
        // let distanceMoved    // Initialize 'distanceMoved

        if(roll === 0){ 
            this.rollGameDie()  // If 0 is rolled, roll again
        }
        else if(roll < 0){  // If a number less than 0 is rolled, Move back by the AbVal of that number
            console.log(this.name + " Moved Down " + roll)
            return this.playerPosition += roll  // return 
        }
        else if(roll > 0 && roll <=5){
            console.log(this.name + " Moved Up " + roll)
            return this.playerPosition += roll     // If a number less than 5 but more than 0 is rolled, Move forward by that number
        }
        else if(roll === 6){
            console.log(" RE Triggered")
            this.initRandomEvent() // "If...6...rolled", start a random event (Player will roll again after a RE, but cannot trigger a second RE in one turn; roll again until a number is rolled)
        }
    }

    initRandomEvent(){  // Define RE method
        let roll = Math.floor(Math.random() * (6 - 1)) + 1; // Define variable roll which rolls a number 1-5; ea. number will represent an event

        if(roll == 1){  // If 1 is rolled...
            console.log(this.name + " got a bonus move! Roll again.")
            this.rollAgain()  // ...Roll again
        }
        else if(roll == 2){ // If 2 is rolled...
            if(this == playerOne){  // ...by player... 
                let opponent = playersArray.indexOf(computerAlpha) // ...'opponent' is defined as AI's position in playersArray...
                playersArray[opponent].rollAgain()  // ...and opponent gets a bonus move.
            }
            else if(this == computerAlpha){ // or if 2 is rolled by AI...
                let opponent = playersArray.indexOf(playerOne)  // ...opponent is defined as player's position in playersArray...
                playersArray[opponent].rollAgain()  // ... and opponent gets a bonus move
            }
            console.log( this.name + " has gifted their opponent a bonus move! How generous. Opponent rolls again.")

        }
        else if(roll == 3){ // If 3 is rolled...
            console.log(this.name + " moves up")
            return this.playerPosition += 2 // Move player up 2 
        }
        else if(roll == 4){ // If 4 is rolled...
            console.log(this.name + " moves down")
            return this.playerPosition -= 1 // Move player back 1
        }
        else if(roll == 5){ // If 5 is rolled...
            console.log("FIGHT! FIGHT!! FIGHT!!!")
            this.initDuel() // Start a duel
        }
    }
    
    rollAgain(){              // Function to roll again (due to RE)
        let roll = Math.floor(Math.random() * (6 - 1)) + 1    // Roll a number 1-5
        console.log(this.name + " rolled a " + roll + ".")
        return this.playerPosition += roll // Add that^ number to player position
    }
    
    initDuel(){ // Define a method to start a duel
        let playerOneRoll = playerOne.rollDuelDie();    // variable for user rolling duel die
        let computerAlphaRoll = computerAlpha.rollDuelDie();    // variable for AI rolling duel die
        
        // playerOneRoll   // Player rolls
        console.log("Player's roll is " + playerOneRoll)
        // computerAlphaRoll   // AI rolls
        console.log("Alpha's roll is " + computerAlphaRoll)
        if(playerOneRoll == computerAlphaRoll){
            console.log("Re-Roll")
            this.initDuel() // If player and AI roll the same, both roll again
        }
        else if(playerOneRoll > computerAlphaRoll){
            console.log(playerOne.name + " wins")
            playerOne.playerPosition ++, computerAlpha.playerPosition --    // If player rolls higher: player moves ahead 1, AI moves back 1
        }
        else if(computerAlphaRoll > playerOneRoll){
            console.log(computerAlpha.name + " wins")
            computerAlpha.playerPosition ++, playerOne.playerPosition --    // If AI rolls higher; AI moves ahead 1, player moves back 1
        }        
    }

    rollDuelDie(){  // Define a Method for players to roll a "Duel Dye"(only #s from 1-4)
        let numRolled = (Math.floor(Math.random() * (5 - 1) + 1)) // ...Rolls a number b/w 1-4
        return numRolled // Otherwise return the number rolled
    }        
    teleportAhead(){    
        console.log(this.name + " has been teleported ahead. That should ease the journey a bit!")
        this.playerPosition += 5    // Instantly makes a player jump ahead 5 spaces(via special space)
    }
    teleportBack(){    // Instantly sends a player back 2 spaces(via special block)
        console.log(this.name + " has been teleported back! No rest for the wicked, it seems...")
        this.playerPosition -= 2
    }
}    

        

// ***************Player Objects***************

// *****Default Array for Players*****
const playersArray = [
// User
playerOne = new Player("Greg"),
// I plan on making the name fill in with whatever the user inputs their name as; also trait will be picked before
//  game starts

// AI Opponent(s)
computerAlpha = new Player("Alpha")        
// Will need to randomly assign a Trait to AI Player in pregame setup
]



// ******************************GAME STRUCTURE******************************

// To win, a player must pass the final block. The first player to do this wins, ending the game. 



// ***************PRE-GAME SETUP***************

// So far, at least 2 things need to be established in pre-game:
    // (1) Player Name
    // (2) Turn Order(determined by die roll)

// ***************GAMEBOARD SETUP***************

// -33 squares/blocks to move in total
// -Every third block has either a "Duel" or a "Random Event" that can help or hinder the player that lands on it

// Board Squares Class template
class Block{
    constructor(blockPosition,special){
        this.blockPosition = blockPosition
        this.special = special
    }
}

// Array of created Blocks/Squares
const gameBoard = [
    blockOne = new Block(1,"Teleport Forward"),
    blockTwo = new Block(2,"None"),
    blockThree = new Block(3,"Duel"),
    blockFour = new Block(4,"None"),
    blockFive = new Block(5,"Teleport Backward"),
    blockSix = new Block(6,"Random Event"),
    blockSeven = new Block(7,"None"),
    blockEight = new Block(8,"None"),
    blockNine = new Block(9,"Random Event"),
    blockTen = new Block(10,"None"),
    blockEleven = new Block(11,"None"),
    blockTwelve = new Block(12,"Random Event"),
    blockThirteen = new Block(13,"None"),
    blockFourteen = new Block(14,"Teleport Forward"),
    blockFifteen = new Block(15,"Random Event"),
    blockSixteen = new Block(16,"None"),
    blockSeventeen = new Block(17,"None"),
    blockEighteen = new Block(18,"Random Event"),
    blockNineteen = new Block(19,"Teleport Backward"),
    blockTwenty = new Block(20,"None"),
    blockTwentyOne = new Block(21,"Random Event"),
    blockTwentyTwo = new Block(22,"None"),
    blockTwentyThree = new Block(23,"None"),
    blockTwentyFour = new Block(24,"Random Event"),
    blockTwentyFive = new Block(25,"None"),
    blockTwentySix = new Block(26,"None"),
    blockTwentySeven = new Block(27,"Random Event"),
    blockTwentyEight = new Block(28,"Teleport Forward"),
    blockTwentyNine = new Block(29,"None"),
    blockThirty = new Block(30,"Random Event"),
    blockThirtyOne = new Block(31,"None"),
    blockThirtyTwo = new Block(32,"Teleport Backward"),
    blockThirtyThree = new Block(33,"Duel")
]

// ***************ROUND STRUCTURE & LOOP***************

// -Players will roll a die to determine their Move
// -The loop will go as follows
    // (1) Player One rolls and executes Move accordingly
    // (2) Game will check if this player has made it past the final block's position(33)
    // (3) If so, this player has won
    // (4) If not, check to see if the player is on a special block; if so, execute that special
    // (5) Next player's turn to roll and execute; continue looping until a player gets past Block 33

// Game loop
while(playerOne.playerPosition < 34 && computerAlpha.playerPosition < 34){  // While either player's position is less than 34...
    playerOne.rollGameDie()
    if(playerOne.playerPosition>34){
        console.log(playerOne.name + " reached the Bunker! There was only one spot left. All other players will be left to toil in the Wasteland. Game Over")
        break
    }
    computerAlpha.rollGameDie()
    if(computerAlpha.playerPosition>34){
        console.log(computerAlpha.name + " reached the Bunker! There was only one spot left. All other players will be left to toil in the Wasteland. Game Over")
        break
    }

}

// const gameObject = {
//     runGame: function(){
//     while(playersArray.playerPosition < 34){

//     }
//     }
// }



// ******************************TEST AREA******************************
console.log(playerOne.playerPosition)
console.log(computerAlpha.playerPosition)
