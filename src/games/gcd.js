import toGame from '../engine.js';
import { minValue, maxValue, getRndInteger } from '../index.js';

const taskGcd = 'Find the greatest common divisor of given numbers.';

const getQuestionGcd = () => {
  const firstNode = getRndInteger(minValue, maxValue);
  const secondNode = getRndInteger(minValue, maxValue);
  return (`${firstNode} ${secondNode}`);
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getCorrectAnswerGcd = (txt) => {
  const nodes = txt.split(' ');
  const fNode = Number(nodes[0]);
  const sNode = Number(nodes[1]);
  const res = String(gcd(fNode, sNode));
  return res;
};

const toPlayGcd = () => toGame(taskGcd, getQuestionGcd, getCorrectAnswerGcd);

export default toPlayGcd;
