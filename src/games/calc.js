import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';


const taskCalc = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getCalc = () => {
  const firstElement = generateRandomInteger(minValue, maxValue);
  const secondElement = generateRandomInteger(minValue, maxValue);
  const minIndexOperations = 0;
  const maxIndexOperations = operations.length - 1;
  const operator = operations[generateRandomInteger(minIndexOperations, maxIndexOperations)];
  const expression = `${firstElement} ${operator} ${secondElement}`;
  let result;
  switch (operator) {
    case '+':
      result = firstElement + secondElement;
      break;
    case '-':
      result = firstElement - secondElement;
      break;
    case '*':
      result = firstElement * secondElement;
      break;
    default:
      return null;
  }
  const resultExpression = String(result);
  return [expression, resultExpression];
};

const getQuestionAndAnswerCalc = () => getCalc();

const toPlayCalc = () => toGame(taskCalc, getQuestionAndAnswerCalc);

export default toPlayCalc;
