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

export const toAskProg = 'What number is missing in the progression?';

export const progQuestionProg = () => {
  const arr = [getRndInteger(minValue, maxValue)];
  const minStep = 2;
  const maxStep = 10;
  const minIndexOfSecretElement = 2;
  const maxIndexOfSecretElement = 9;
  const secretElement = getRndInteger(minIndexOfSecretElement, maxIndexOfSecretElement);
  const step = getRndInteger(minStep, maxStep);
  for (let acc = 0; acc < 9; acc += 1) {
    const element = arr[arr.length - 1] + step;
    arr.push(element);
  }
  arr[secretElement] = '..';
  return arr.join(' ');
};

export const getCorrectAnswerProg = (txt) => {
  const items = txt.split(' ');
  let serchInteger = 0;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] === '..' && i < 2) {
      const stepProgression = Number(items[i + 3]) - Number(items[i + 2]);
      serchInteger = Number(items[i + 1]) - Number(stepProgression);
      break;
    }
    if (items[i] === '..' && i > 1) {
      const stepProgression = Number(items[1]) - Number(items[0]);
      serchInteger = Number(items[i - 1]) + Number(stepProgression);
      break;
    }
  }
  return String(serchInteger);
};

export const toAskPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let div = 2;
  while (div < num) {
    if (num % div === 0) {
      return false;
    }
    div += 1;
  }
  return true;
};

export const getCorrectAnswerPrime = (number) => {
  const resultPrime = isPrime(number) ? 'yes' : 'no';
  return resultPrime;
};
