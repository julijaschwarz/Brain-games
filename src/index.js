import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return `${userName}`;
};

const minValue = 1;
const maxValue = 100;
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const toAskIsEven = 'Answer "yes" if the number is even, otherwise answer "no".';

export const progQuestionEven = () => {
  const randomNumber = getRndInteger(minValue, maxValue);
  return randomNumber;
};

const isEven = (num) => ((num % 2) === 0);
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

export const getCorrectAnswerEven = (num) => check(num);

export const toAskCalc = 'What is the result of the expression?';

const arrOfOperations = ['+', '-', '*'];
const getRandOperation = (arr) => arr[Math.floor(Math.random() * arr.length)];


export const progQuestionCalc = () => {
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

export const getCorrectAnswerCalc = (txt) => {
  const words = txt.split(' ');
  const firstEl = Number(words[0]);
  const secEl = Number(words[2]);
  return operations(firstEl, words[1], secEl);
};

export const toAskGcd = 'Find the greatest common divisor of given numbers.';

export const progQuestionGcd = () => {
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

export const getCorrectAnswerGcd = (txt) => {
  const nodes = txt.split(' ');
  const fNode = Number(nodes[0]);
  const sNode = Number(nodes[1]);
  const res = String(gcd(fNode, sNode));
  return res;
};
