import readlineSync from 'readline-sync';
import * as utils from '../utils';

const createRandomProgression = (length = 10) => {
  const difference = utils.getRandomNum(2, 9);
  const firstMember = utils.getRandomNum(2, 49);
  const result = [];
  for (let i = firstMember; result.length <= length; i += difference) {
    result.push(i);
  }
  return result;
};

const missProgressionMember = (progression) => {
  const missingMemberIndex = utils.getRandomNum(1, progression.length - 2);
  const result = progression.map((elt, i) => (i === missingMemberIndex ? '...' : elt));
  result.missingMember = progression[missingMemberIndex];
  return result;
};

const description = '\nFind the missing member of the progression';
const playRound = () => {
  const progression = missProgressionMember(createRandomProgression());
  const progressionString = progression.join(' ');
  const userAnswer = +readlineSync.question(`Progression: ${progressionString}\nMissing member: `);
  const rightAnswer = progression.missingMember;
  return utils.checkAnswer(userAnswer, rightAnswer);
};

const playGame = () => {
  const rounds = 3;
  let scores = 0;
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    if (playRound()) scores += 1;
  }
  utils.printResults(scores, rounds);
};

export default playGame;
