// ******************************NOTES******************************

// The game, by default will be 1v1- the user vs 1 AI. If time permits I would like to add up to 2 more players,
// and an ability for opponents to be human controlled instead of AI



// ******************************PLAYERS******************************

// *****Class Template*****
class Player{
    constructor(Name,Class){
        this.name = Name
        this.class = Class
    }
}


// *****Player Objects*****

// User
const playerOne = new Player("*User Input*", "*User Select*")        // I plan on making this fill in with 
// whatever the user inputs their name as; also class will be picked before game starts

// AI Opponent
let computerAlpha = new Player("Alpha", "Randomly Selected")        // Will need to randomly assign a class to AI Player in pregame setup


// ******************************Test Area******************************
// console.log(playerOne, 
//      computerAlpha)