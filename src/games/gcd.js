import * as utils from '../utils';
import { createGameLauncher, createGameRound } from '../game-engine';

const getTwoRandomNums = () => [utils.getRandomNum(1, 60), utils.getRandomNum(1, 60)];

const description = '\nFind the greatest common divisor (GCD) of two numbers';
const getQuestion = () => getTwoRandomNums().join(' ');
const getRightAnswer = question => `${utils.getGreatestCommonDivisor(...question.split(' '))}`;

const playRound = createGameRound(getQuestion, getRightAnswer);
const startGame = createGameLauncher(3, description, playRound);

export default startGame;
