import playGame from '../engine.js';
import { minValue, maxValue, generateRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (firstOperand, secondOperand, operationCalculate) => {
  let result;
  switch (operationCalculate) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      return null;
  }
  return result;
};

const getQuestionAnswer = () => {
  const firstNumber = generateRandomNumber(minValue, maxValue);
  const secondNumber = generateRandomNumber(minValue, maxValue);
  const minIndexOperation = 0;
  const maxIndexOperation = operations.length - 1;
  const operation = operations[generateRandomNumber(minIndexOperation, maxIndexOperation)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, operation));
  return [question, answer];
};

export default () => playGame(description, getQuestionAnswer);
