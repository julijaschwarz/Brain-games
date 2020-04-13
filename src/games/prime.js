import toGame from '../engine.js';
import { minValue, maxValue, generateRandomNumber } from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  let divider = 2;
  while (divider < number) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const getQuestionAnswer = () => {
  const question = generateRandomNumber(minValue, maxValue);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => toGame(task, getQuestionAnswer);
