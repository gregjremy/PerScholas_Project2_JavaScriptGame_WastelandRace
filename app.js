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
        let distanceMoved;    // Add the amount rolled to the player position

        if(roll === 0){ 
            this.rollGameDie()  // If 0 is rolled, re-roll
        }
        else if(roll < 0){  // If a number less than 0 is rolled, Move back by the AbVal of that number
            console.log(" Moved Down " + roll)
            return distanceMoved = this.playerPosition += roll  
        }
        else if(roll > 0 && roll <=5){
            console.log(" Moved Up " + roll)
            return distanceMoved = this.playerPosition += roll     // If a number less than 5 but more than 0 is rolled, Move forward by that number
        }
        else if(roll === 6){
            console.log(" RE Triggered")
            this.initRandomEvent(playersArray[0],playersArray[1]) // "If...6...rolled", start a random event (Player will roll again after a RE, but cannot trigger a second RE in one turn; roll again until a number is rolled)
        }
    }

    initRandomEvent(user,comp){  // Define RE method
        let roll = 5
        console.log(user,comp)
        // Math.floor(Math.random() * (6 - 1)) + 1; // Define variable roll which...
        // ...rolls a number 1-5; ea. number will represent an event
        console.log("roll",roll)
        
        if(roll == 1){  // If 1 is rolled...
            this.rollAgain(), console.log(" Rolled again",this.name) // ...Roll again
        }
        else if(roll == 2){ // If 2 is rolled...
            // this.removePlayer()
            // this.goToTimeout()
            // this.outOfTimeout()
            // this.reinsertPlayer()
            console.log(" Player Lost Turn")
            console.log("Enemy goes again", )
        }
        else if(roll == 3){ // If 3 is rolled...
            console.log(" Player moves up")
            return this.playerPosition += 2 // Move player up 2 
        }
        else if(roll == 4){ // If 4 is rolled...
            console.log(" Player moves down")
            return this.playerPosition -= 1 // Move player back 1
        }
        else if(roll == 5){ // If 5 is rolled...
            console.log("FIGHT! FIGHT!! FIGHT!!!")
            this.initDuel() // Start a duel
        }
    }
    
    rollAgain(){              // Function to roll again (due to RE)
        let roll = Math.floor(Math.random() * (6 - 1)) + 1    // Roll a number 1-5
        return this.playerPosition += roll // Add that^ number to player position
    }
    
    //-------------Begin methods for making a player lose their next turn----------- 
    removePlayer(){    // Define a function... 
        let x = playersArray.indexOf(this); // with a variable that equals the location of the player in the players' default array
        playersArray.splice(x,1)    // ...and that removes a player from playerArray...    
    }
    goToTimeout(){    // And a function...
        timeoutArray.push(this) // That pushes this player to timeout Array
    }
    outOfTimeout(){   // And another function...
        let y = timeoutArray.indexOf(this); // with a variable that equals the location of the player in the timeout array
        timeoutArray.splice(y,1)    // ... and takes the player out of that timeoutArray
    }
    reinsertPlayer(){ // And one last function
        playersArray.push(this)    // to push that player back into it's original array.
    }    
    //---------------End methods for making a player lose turn---------------

    initDuel(){
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
            console.log("Player wins")
            playerOne.playerPosition ++, computerAlpha.playerPosition --    // If player rolls higher: player moves ahead 1, AI moves back 1
        }
        else if(computerAlphaRoll > playerOneRoll){
            console.log("AI wins")
            computerAlpha.playerPosition ++, playerOne.playerPosition --    // If AI rolls higher; AI moves ahead 1, player moves back 1
        }        
    }


    rollDuelDie(){  // Define a Method for players to roll a "Duel Dye"(only #s from 1-4)
        let numRolled = (Math.floor(Math.random() * (5 - 1) + 1)) // ...Rolls a number b/w 1-4
        return numRolled // Otherwise return the number rolled
    }        
}    

        

// ***************Player Objects***************

// *****Default Array for Players*****
// User
const playerOne = new Player("*User Input*")
// I plan on making the name fill in with whatever the user inputs their name as; also trait will be picked before
//  game starts

// AI Opponent(s)
const computerAlpha = new Player("Alpha", 10)        
// Will need to randomly assign a Trait to AI Player in pregame setup

const playersArray = [
    playerOne,
    computerAlpha
// // User
// playerOne = new Player("*User Input*"),
// // I plan on making the name fill in with whatever the user inputs their name as; also trait will be picked before
// //  game starts

// // AI Opponent(s)
// computerAlpha = new Player("Alpha", 10)        
// // Will need to randomly assign a Trait to AI Player in pregame setup
]

// Array for Players to wait if they lose a turn
const timeoutArray = []


// ******************************GAME STRUCTURE******************************

// To win, a player must reach the final block. The first player to do this wins, ending the game. 

// while(Player.playerPosition)



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
        this.blockPosition = blockPosition
        this.special = special
    }
    refPlayer = playersArray.indexOf(playerOne);
    refComputer = playersArray.indexOf(computerAlpha);

    teleportAhead(){    
        this.playerPosition += 5    // Instantly makes a player jump ahead 5 spaces
    }
    teleportBack(){    // Instantly sends a player back 2 spaces
        this.playerPosition -= 2
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
computerAlpha.rollGameDie()
console.log(playersArray)
