import toGame from '../engine.js';
import { minValue, maxValue, getRndInteger } from '../index.js';


const taskCalc = 'What is the result of the expression?';

const arrOfOperations = ['+', '-', '*'];
const getRandOperation = (arr) => arr[Math.floor(Math.random() * arr.length)];


const getQuestionCalc = () => {
  const firstElement = getRndInteger(minValue, maxValue);
  const secondElement = getRndInteger(minValue, maxValue);
  const operatorElement = getRandOperation(arrOfOperations);
  return (`${firstElement} ${operatorElement} ${secondElement}`);
};

const operations = (fOperand, operator, sOperand) => {
  let res = 0;
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
  return operations(firstEl, words[1], secEl);
};

const toPlayCalc = () => toGame(taskCalc, getQuestionCalc, getCorrectAnswerCalc);

export default toPlayCalc;
