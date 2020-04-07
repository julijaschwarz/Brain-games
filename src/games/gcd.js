import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';

const taskGcd = 'Find the greatest common divisor of given numbers.';

const getQuestionGcd = () => {
  const firstRandomNode = generateRandomInteger(minValue, maxValue);
  const secondRandomNode = generateRandomInteger(minValue, maxValue);
  return (`${firstRandomNode} ${secondRandomNode}`);
};

const findGreatestCommonDivider = (firstInteger, secondInteger) => {
  if (secondInteger === 0) {
    return firstInteger;
  }
  return findGreatestCommonDivider(secondInteger, firstInteger % secondInteger);
};

const getCorrectAnswerGcd = (txt) => {
  const nodes = txt.split(' ');
  const firstNode = Number(nodes[0]);
  const secondNode = Number(nodes[1]);
  const result = String(findGreatestCommonDivider(firstNode, secondNode));
  return result;
};

const getQuestionAndAnswerGcd = () => {
  const question = getQuestionGcd();
  const answer = getCorrectAnswerGcd(question);
  return [question, answer];
};

const toPlayGcd = () => toGame(taskGcd, getQuestionAndAnswerGcd);

export default toPlayGcd;
