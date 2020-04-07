import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';


const taskCalc = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getQuestionCalc = () => {
  const firstElement = generateRandomInteger(minValue, maxValue);
  const secondElement = generateRandomInteger(minValue, maxValue);
  const minIndexOperations = 0;
  const maxIndexOperations = operations.length - 1;
  const operatorElement = operations[generateRandomInteger(minIndexOperations, maxIndexOperations)];
  return (`${firstElement} ${operatorElement} ${secondElement}`);
};

const getCorrectAnswerCalc = (txt) => {
  const words = txt.split(' ');
  const fOperand = Number(words[0]);
  const sOperand = Number(words[2]);
  const operator = words[1];
  let result;
  switch (operator) {
    case '+':
      result = fOperand + sOperand;
      break;
    case '-':
      result = fOperand - sOperand;
      break;
    case '*':
      result = fOperand * sOperand;
      break;
    default:
      return null;
  }
  return String(result);
};

const getQuestionAndAnswerCalc = () => {
  const question = getQuestionCalc();
  const answer = getCorrectAnswerCalc(question);
  return [question, answer];
};

const toPlayCalc = () => toGame(taskCalc, getQuestionAndAnswerCalc);

export default toPlayCalc;
