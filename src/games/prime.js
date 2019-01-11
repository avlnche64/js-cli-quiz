import readlineSync from 'readline-sync';
import * as utils from '../utils';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Enter "yes" if the number is prime and "no" otherwise';
const playRound = () => {
  const number = utils.getRandomNum(1, 25);
  const userAnswer = readlineSync.question(`Is ${number} a prime number? `);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return utils.checkAnswer(userAnswer, rightAnswer);
};

const primeGame = () => {
  const rounds = 3;
  let scoreCounter = 0;
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    if (playRound()) scoreCounter += 1;
  }
  utils.printResults(scoreCounter, rounds);
};

export default primeGame;
