import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';

const taskPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let div = 2;
  while (div < num) {
    if (num % div === 0) {
      return false;
    }
    div += 1;
  }
  return true;
};

const getCorrectAnswerPrime = (number) => {
  const resultPrime = isPrime(number) ? 'yes' : 'no';
  return resultPrime;
};

const getQuestionAndAnswerPrime = () => {
  const question = generateRandomInteger(minValue, maxValue);
  const answer = getCorrectAnswerPrime(question);
  return [question, answer];
};

const toPlayPrimeNumber = () => toGame(taskPrime, getQuestionAndAnswerPrime);

export default toPlayPrimeNumber;
