// ******************************NOTES******************************

// The game, by default will be 1v1- the user vs 1 AI. If time permits I would like to add up to 2 more players,
// and an ability for opponents to be human controlled instead of AI



// ******************************PLAYERS******************************

// ***************Class Template***************
class Player{
    constructor(name){
        this.name = name
        this.playerPosition = 0
    }
    rollGameDie(){              //Method to determine move
        let roll = Math.floor(Math.random() * (7 - (-2))) + (-2);     // Generate a number (-2)-6
        if(roll === 0){ 
            this.rollGameDie()  // If 0 is rolled, re-roll
        }
        else if(roll < 0){  // If a number less than 0 is rolled, move back by the AbVal of that number
            console.log(roll, " Move back by the absolute value of " + roll)  
        }
        else if(roll > 0 && roll <=5){
            console.log(roll, " Move forward by " + roll)     // If 5 or less is rolled, move forward by that number
        }
        else if(roll === 6){
            console.log(roll, " Random event triggered") // "If...6...rolled", start a random event
        }
    }
    rollDuelDie(){  // Define a Method for players to roll a "Duel Dye"(only #s from (-2)-4)
        let numRolled = (Math.floor(Math.random() * (5 - (-2)) + (-2))) // ...Rolls a number b/w (-2)-4
        if(numRolled == 0){
            this.rollDuelDie()  // If the number rolled is 0, then re-roll
        }
        else console.log(numRolled) // Otherwise return the number rolled
    }        
}    

        



// ***************Player Objects***************
const playersArray = [
// *****User*****
playerOne = new Player("*User Input*"),
// I plan on making this fill in with whatever the user inputs their name as; also class will be picked before
//  game starts

// *****AI Opponent(s)*****
computerAlpha = new Player("Alpha")        
// Will need to randomly assign a class to AI Player in pregame setup
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
    constructor(blockPosition){
        this.position = blockPosition
        this.special = "Random Event" || "Move Forward" || "Move Back" || "None"
    }
    initRandomEvent(){  // will include a function for "rollAgain" "loseNextTurn" "moveForward2" "moveBackward1" & "R.E."

    }
    teleportAhead(x){    
        console.log(playersArray[x].playerPosition += 5)    // Instantly makes a player jump ahead 5 spaces
    }


}

// Array of created Blocks/Squares
const gameBoard = [
    blockOne = new Block(1),
    blockTwo = new Block(2),
    blockThree = new Block(3)
    
]

// ***************ROUND STRUCTURE & LOOP***************

// -Players will roll a die to determine their move
// -The loop will go as follows
    // (1) Player One rolls and executes move accordingly
    // (2) Game will check if this player has made it to or past the final block's position
    // (3) If so, this player has won
    // (4) If not, next player rolls and the loop continues until a player reaches the final block's value/position



// ******************************TEST AREA******************************
