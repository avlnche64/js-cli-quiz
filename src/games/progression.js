import * as utils from '../utils';
import { createGameLauncher, createGameRound } from '../game-engine';

const getRandomProgression = (length = 10) => {
  const difference = utils.getRandomNum(2, 9);
  const firstMember = utils.getRandomNum(2, 49);
  const result = [];
  for (let i = firstMember; result.length <= length; i += difference) {
    result.push(i);
  }
  return result;
};

const getProgressionWithMissingMember = () => {
  const progression = getRandomProgression();
  const missingMemberIndex = utils.getRandomNum(1, progression.length - 2);
  return progression.map((elt, i) => (i === missingMemberIndex ? '...' : elt));
};

const description = '\nFind the missing member of the progression';
const getQuestion = () => getProgressionWithMissingMember().join(' ');
const getRightAnswer = (question) => {
  const progression = question.split(' ');
  let indexOfMissing = 0;
  progression.forEach((elt, i) => {
    if (elt === '...') indexOfMissing = i;
  });
  return `${(+progression[indexOfMissing - 1] + +progression[indexOfMissing + 1]) / 2}`;
};

const playRound = createGameRound(getQuestion, getRightAnswer);
const startGame = createGameLauncher(3, description, playRound);

export default startGame;
