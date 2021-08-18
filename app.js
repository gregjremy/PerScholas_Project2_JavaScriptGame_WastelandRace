// ******************************NOTES******************************

// The game, by default will be 1v1- the user vs 1 AI. If time permits I would like to add up to 2 more players,
// and an ability for opponents to be human controlled instead of AI



// ******************************PLAYERS******************************

// ***************Class Template***************
class Player{
    constructor(name, playerPosition){
        this.name = name
        this.playerPosition = playerPosition || 20
    }
    rollGameDie(){              //Method to determine Move
        let roll = Math.floor(Math.random() * (7 - (-2))) + (-2);     // Generate a number (-2)-6

        let distanceMoved = this.playerPosition += roll;

        if(roll === 0){ 
            this.rollGameDie()  // If 0 is rolled, re-roll
        }
        else if(roll < 0){  // If a number less than 0 is rolled, Move back by the AbVal of that number
            console.log(roll, distanceMoved)  
        }
        else if(roll > 0 && roll <=5){
            console.log(roll, distanceMoved)     // If a number less than 5 but more than 0 is rolled, Move forward by that number
        }
        else if(roll === 6){
            console.log(roll, " Random event triggered") // "If...6...rolled", start a random event (Player will roll again after a RE, but cannot trigger a second RE in one turn; roll again until a number is rolled)
        }
    }

    rollAgain(){              // Function to roll again (due to RE)
        let roll = Math.floor(Math.random() * (6 - 1)) + 1    // Roll a number 1-5
        return this.playerPosition += roll // Add that^ number to player position
    }

    rollDuelDie(){  // Define a Method for players to roll a "Duel Dye"(only #s from 1-4)
        let numRolled = (Math.floor(Math.random() * (5 - 1) + 1)) // ...Rolls a number b/w 1-4
        return numRolled // Otherwise return the number rolled
    }        
}    

        



// ***************Player Objects***************
const playersArray = [
// *****User*****
playerOne = new Player("*User Input*"),
// I plan on making this fill in with whatever the user inputs their name as; also class will be picked before
//  game starts

// *****AI Opponent(s)*****
computerAlpha = new Player("Alpha", 10)        
// Will need to randomly assign a Trait to AI Player in pregame setup
]


// ******************************GAME STRUCTURE******************************

// To win, a player must reach the final block. The first player to do this wins, ending the game. 

// ***************PRE-GAME SETUP***************

// So far, at least 3 things need to be established in pre-game:
    // (1) Player Name
    // (2) Turn Order(determined by die roll)
    // (3) Class Selection(Player can pick or randomize; AI randomly chosen)

// ***************GAMEBOARD SETUP***************

// -33 squares/blocks to move in total
// -Every third block has either a "Duel" or a "Random Event" that can help or hinder the player that lands on it

// Board Squares Class template
class Block{
    constructor(blockPosition,special){
        this.position = blockPosition
        this.special = special
    }
    initRandomEvent(){  // will include a function for "rollAgain" "loseNextTurn" "TeleportForward2" "TeleportBackward1" & "R.E."

    }
    teleportAhead(x){    
        console.log(playersArray[x].playerPosition += 5)    // Instantly makes a player jump ahead 5 spaces
    }
    teleportBack(x){    // Instantly sends a player back 2 spaces
        console.log(playersArray[x].playerPosition -= 2)
    }
    extraRoll(x){   // Lets the player roll the die for an extra move
        return playersArray[x].rollAgain
    }
    loseNextTurn(){ // Forfeits the players rollDie next turn (considering putting the player in a 'Timeout' array for a turn)

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
    blockThirtyThree = new Block(33,"Duel"),
]

// ***************ROUND STRUCTURE & LOOP***************

// -Players will roll a die to determine their Move
// -The loop will go as follows
    // (1) Player One rolls and executes Move accordingly
    // (2) Game will check if this player has made it to or past the final block's position
    // (3) If so, this player has won
    // (4) If not, next player rolls and the loop continues until a player reaches the final block's value/position



// ******************************TEST AREA******************************
