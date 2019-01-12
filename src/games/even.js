import * as utils from '../utils';
import { createGameLauncher, createGameRound } from '../game-engine';

const isEven = num => num % 2 === 0;

const description = 'Enter "yes" if the number is even and "no" otherwise';
const getQuestion = () => utils.getRandomNum(1, 200);
const getRightAnswer = question => utils.boolToYesNo(isEven(question));

const playRound = createGameRound(getQuestion, getRightAnswer);
const startGame = createGameLauncher(3, description, playRound);
export default startGame;
