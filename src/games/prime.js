import * as utils from '../utils';
import { createGameLauncher, createGameRound } from '../game-engine';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Enter "yes" if the number is prime and "no" otherwise';
const getQuestion = () => utils.getRandomNum(1, 25);
const getRightAnswer = question => utils.boolToYesNo(isPrime(question));

const playRound = createGameRound(getQuestion, getRightAnswer);
const startGame = createGameLauncher(3, description, playRound);
export default startGame;
