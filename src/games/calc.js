import * as utils from '../utils';
import { createGameLauncher, createGameRound } from '../game-engine';

const getExpression = (numberOfSummands) => {
  const summands = [];
  for (let i = 0; i < numberOfSummands; i += 1) {
    summands.push(utils.getRandomNum(0, 99));
  }
  return summands.join(' + ');
};

const description = '\nWhat is the result of expression?';
const getQuestion = () => getExpression(3);
const getRightAnswer = question => `${utils.sumArrElements(question.split(' + '))}`;

const playRound = createGameRound(getQuestion, getRightAnswer);
const startGame = createGameLauncher(3, description, playRound);
export default startGame;
