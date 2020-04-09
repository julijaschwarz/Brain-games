import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';

const taskEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2) === 0);

const getQuestionAndAnswerEven = () => {
  const question = generateRandomInteger(minValue, maxValue);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const toPlayEvenNumber = () => toGame(taskEven, getQuestionAndAnswerEven);

export default toPlayEvenNumber;
