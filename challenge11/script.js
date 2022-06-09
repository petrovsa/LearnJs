///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// 1,2
const game = {
  odd: {
    team1: "Manchester City",
    team2: "Dynamo",
    x: "score",
  },
  players: [
    [
      "Mark de Bur",
      "pl1_1",
      "pl1_2",
      "pl1_3",
      "pl1_4",
      "pl1_5",
      "pl1_6",
      "pl1_7",
      "pl1_8",
      "pl1_9",
      "pl1_10",
    ],
    [
      "Pyatov",
      "pl2_1",
      "pl2_2",
      "pl2_3",
      "pl2_4",
      "pl2_5",
      "pl2_6",
      "pl2_7",
      "pl2_8",
      "pl2_9",
      "pl2_10",
    ],
  ],
};

[players1, players2] = game.players;
console.log(players1, players2);

[gk, ...players1New] = players1;
console.log(gk);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//3
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odd;
console.log(team1, draw, team2);
//var1
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  //OR
  console.log(players); // in one line
  console.log(players.length);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
