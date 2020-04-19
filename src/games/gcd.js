import playGame from '../engine.js';
import { minValue, maxValue, generateRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivider = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return findGreatestCommonDivider(secondNumber, firstNumber % secondNumber);
};

const getQuestionAnswer = () => {
  const firstRandomNumber = generateRandomNumber(minValue, maxValue);
  const secondRandomNumber = generateRandomNumber(minValue, maxValue);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = String(findGreatestCommonDivider(firstRandomNumber, secondRandomNumber));
  return [question, answer];
};

export default () => playGame(description, getQuestionAnswer);
