import toGame from '../engine.js';
import { minValue, maxValue, generateRandomNumber } from '../utils.js';

const task = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (foperand, sOperand, operatorOfExpression) => {
  let result;
  switch (operatorOfExpression) {
    case '+':
      result = foperand + sOperand;
      break;
    case '-':
      result = foperand - sOperand;
      break;
    case '*':
      result = foperand * sOperand;
      break;
    default:
      return null;
  }
  return result;
};

const getCalc = () => {
  const firstNumber = generateRandomNumber(minValue, maxValue);
  const secondNumber = generateRandomNumber(minValue, maxValue);
  const minIndexOperations = 0;
  const maxIndexOperations = operations.length - 1;
  const operator = operations[generateRandomNumber(minIndexOperations, maxIndexOperations)];
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const resultExpression = String(calculate(firstNumber, secondNumber, operator));
  return [expression, resultExpression];
};

export default () => toGame(task, getCalc);
