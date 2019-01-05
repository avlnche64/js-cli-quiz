const utils = {};

utils.getRandomNum = (min, max) => {
  const result = min + Math.floor(Math.random() * (max + 1 - min));
  return result;
};

utils.checkAnswer = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log('It is wrong answer :(');
  return false;
};

utils.printResults = (scores, rounds) => {
  const ratio = scores / rounds;
  switch (true) {
    case (ratio === 1):
      console.log(`Congradulations! You gave ${scores} correct answers.`);
      break;
    case (ratio >= 0.6):
      console.log(`Not bad! You gave ${scores} correct answers.`);
      break;
    case (ratio >= 0.3):
      console.log(`You gave ${scores} correct answers. You should make more efforts next time`);
      break;
    case (ratio >= 0):
      console.log(`Sorry :( You gave ${scores} correct answers. Please try again`);
      break;
    default:
      // do nothing
  }
};

utils.sumArrElements = (arr) => {
  const arrOfNumbers = arr.map(elt => +elt);
  return arrOfNumbers.reduce((sum, elt) => sum + elt);
};

export default utils;
