import readlineSync from 'readline-sync';
import * as utils from '../utils';

const isEven = num => num % 2 === 0;

const description = 'Enter "yes" if the number is even and "no" otherwise';
const playRound = () => {
  const number = utils.getRandomNum(1, 200);
  const userAnswer = readlineSync.question(`Is ${number} an even number? `);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return utils.checkAnswer(userAnswer, rightAnswer);
};

const even = () => {
  const rounds = 3;
  let scoreCounter = 0;
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    if (playRound()) scoreCounter += 1;
  }
  utils.printResults(scoreCounter, rounds);
};

export default even;
