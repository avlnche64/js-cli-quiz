import readlineSync from 'readline-sync';
import * as utils from '../utils';

const getExpression = (numberOfSummands) => {
  const summands = [];
  for (let i = 0; i < numberOfSummands; i += 1) {
    summands.push(utils.getRandomNum(0, 99));
  }
  return summands.join(' + ');
};

const description = 'What is the result of expression?';
const playRound = () => {
  const expression = getExpression(3);
  const userAnswer = +readlineSync.question(`Expression: ${expression} = `);
  const rightAnswer = utils.sumArrElements(expression.split(' + '));
  return utils.checkAnswer(userAnswer, rightAnswer);
};

const calc = () => {
  const rounds = 3;
  let scoreCounter = 0;
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    if (playRound()) scoreCounter += 1;
  }
  utils.printResults(scoreCounter, rounds);
};

export default calc;
