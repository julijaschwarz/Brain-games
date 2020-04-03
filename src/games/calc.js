import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';


const taskCalc = 'What is the result of the expression?';

const operations = ['+', '-', '*'];
const generateRandomOperation = (arr) => arr[Math.floor(Math.random() * arr.length)];


const getQuestionCalc = () => {
  const firstElement = generateRandomInteger(minValue, maxValue);
  const secondElement = generateRandomInteger(minValue, maxValue);
  const operatorElement = generateRandomOperation(operations);
  return (`${firstElement} ${operatorElement} ${secondElement}`);
};

const getArithmeticOperation = (fOperand, operator, sOperand) => {
  let res;
  switch (operator) {
    case '+':
      res = fOperand + sOperand;
      break;
    case '-':
      res = fOperand - sOperand;
      break;
    case '*':
      res = fOperand * sOperand;
      break;
    default:
      return null;
  }
  return String(res);
};

const getCorrectAnswerCalc = (txt) => {
  const words = txt.split(' ');
  const firstEl = Number(words[0]);
  const secEl = Number(words[2]);
  return getArithmeticOperation(firstEl, words[1], secEl);
};

const getQuestionAndAnswerCalc = () => {
  const question = getQuestionCalc();
  const answer = getCorrectAnswerCalc(question);
  return [question, answer];
};

const toPlayCalc = () => toGame(taskCalc, getQuestionAndAnswerCalc);

export default toPlayCalc;
