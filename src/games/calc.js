import toGame from '../engine.js';
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
  const minIndexOperations = 0;
  const maxIndexOperations = operations.length - 1;
  const operation = operations[generateRandomNumber(minIndexOperations, maxIndexOperations)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, operation));
  return [question, answer];
};

export default () => toGame(description, getQuestionAnswer);
