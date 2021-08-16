// ******************************NOTES******************************

// The game, by default will be 1v1- the user vs 1 AI. If time permits I would like to add up to 2 more players,
// and an ability for opponents to be human controlled instead of AI



// ******************************PLAYERS******************************

// ***************Class Template***************
class Player{
    constructor(Name,Class){
        this.name = Name
        this.class = Class
    }
}

// ***************Player Objects***************

// *****User*****
const playerOne = new Player("*User Input*", "*User Select*")        
// I plan on making this fill in with whatever the user inputs their name as; also class will be picked before
//  game starts

// *****AI Opponent(s)*****
let computerAlpha = new Player("Alpha", "Randomly Selected")        
// Will need to randomly assign a class to AI Player in pregame setup



// ******************************GAME STRUCTURE******************************

// To win, a player must reach the final block. The first player to do this wins, ending the game. 

// ***************PRE-GAME SETUP***************

// So far, at least 3 things need to be established in pre-game:
    // (1) Player Name
    // (2) Turn Order(determined by die roll)
    // (3) Class Selection(Player can pick or randomize; AI randomly chosen)

// ***************GAMEBOARD SETUP***************

// -33 squares/blocks to move in total
// -Every other block has a "Random Event" that can help or hinder the player that lands on it
// -

// ***************ROUND STRUCTURE & LOOP***************

// -Players will roll a die to determine their move
// -The loop will go as follows
    // (1) Player One rolls and executes move accordingly
    // (2) Game will check if this player has made it to or past the final block's position
    // (3) If so, this player has won
    // (4) If not, next player rolls and the loop continues until a player reaches the final block's value/position



// ******************************TEST AREA******************************
