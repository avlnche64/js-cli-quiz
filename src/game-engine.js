import readlineSync from 'readline-sync';
import * as utils from './utils';

export const createGameRound = (getQuestion, getRightAnswer) => () => {
  const question = getQuestion();
  const userAnswer = readlineSync.question(`Question: ${question}\nAnswer: `);
  const rightAnswer = getRightAnswer(question);
  return utils.checkAnswer(userAnswer, rightAnswer);
};

export const createGameLauncher = (rounds, description, playRound) => () => {
  let scores = 0;
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    if (playRound()) scores += 1;
  }
  utils.printResults(scores, rounds);
};
