import readlineSync from 'readline-sync';
import utils from '../utils';

const description = '\nFind the greatest common divisor (GCD) of two numbers';
const playRound = () => {
  const firstNumber = utils.getRandomNum(1, 60);
  const secondNumber = utils.getRandomNum(1, 60);
  const userAnswer = +readlineSync.question(`Numbers: ${firstNumber} ${secondNumber}\nGCD: `);
  const rightAnswer = utils.getGreatestCommonDivisor(firstNumber, secondNumber);
  return utils.checkAnswer(userAnswer, rightAnswer);
};

const gcd = () => {
  const rounds = 3;
  let scores = 0;
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    if (playRound()) scores += 1;
  }
  utils.printResults(scores, rounds);
};

export default gcd;
