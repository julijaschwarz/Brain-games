import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';

const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2) === 0);

const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const getQuestionAndAnswerEven = () => {
  const question = generateRandomInteger(minValue, maxValue);
  const answer = check(question);
  return [question, answer];
};

const toPlayEvenNumber = () => toGame(taskEven, getQuestionAndAnswerEven);

export default toPlayEvenNumber;
