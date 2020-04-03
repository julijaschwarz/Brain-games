import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';

const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionEven = () => {
  const randomInteger = generateRandomInteger(minValue, maxValue);
  return randomInteger;
};

const isEven = (num) => ((num % 2) === 0);

const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const getCorrectAnswerEven = (num) => check(num);

const toPlayEvenNumber = () => toGame(taskEven, getQuestionEven, getCorrectAnswerEven);

export default toPlayEvenNumber;
