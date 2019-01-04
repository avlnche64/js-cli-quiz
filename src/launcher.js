import readlineSync from 'readline-sync';
import games from './games';

const userName = readlineSync.question('What is your name?  ');
console.log(`Hi ${userName}!`);

const listOfGames = Object.keys(games);

const chooseGame = () => {
  const index = readlineSync.keyInSelect(listOfGames, 'Which game would you like to play?\n');
  if (index === undefined) return undefined;

  const chosenGame = listOfGames[index];
  return chosenGame;
};

const chosenGame = chooseGame();
if (chosenGame !== undefined) {
  games[chosenGame]();
}
