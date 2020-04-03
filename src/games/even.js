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

const getQuestionAndAnswerEven = () => {
  const question = getQuestionEven();
  const answer = check(question);
  return [question, answer];
};

const toPlayEvenNumber = () => toGame(taskEven, getQuestionAndAnswerEven);

export default toPlayEvenNumber;
