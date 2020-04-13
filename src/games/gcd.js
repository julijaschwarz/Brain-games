import toGame from '../engine.js';
import { minValue, maxValue, generateRandomNumber } from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivider = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return findGreatestCommonDivider(secondNumber, firstNumber % secondNumber);
};

const getGcd = () => {
  const firstRandomNumber = generateRandomNumber(minValue, maxValue);
  const secondRandomNumber = generateRandomNumber(minValue, maxValue);
  const pairOfNumbers = `${firstRandomNumber} ${secondRandomNumber}`;
  const greatestDivisor = String(findGreatestCommonDivider(firstRandomNumber, secondRandomNumber));
  return [pairOfNumbers, greatestDivisor];
};

export default () => toGame(task, getGcd);
