import toGame from '../engine.js';
import { minValue, maxValue, generateRandomInteger } from '../utils.js';

const taskProg = 'What number is missing in the progression?';

const getQuestionProgression = () => {
  const progression = [];
  const minStep = 2;
  const maxStep = 10;
  const step = generateRandomInteger(minStep, maxStep);
  const start = generateRandomInteger(minValue, maxValue);
  for (let i = 0; i < 10; i += 1) {
    const element = start + step * i;
    progression.push(element);
  }
  const minIndexOfSecretElement = 0;
  const maxIndexOfSecretElement = 9;
  const secretElement = generateRandomInteger(minIndexOfSecretElement, maxIndexOfSecretElement);
  progression[secretElement] = '..';
  return progression.join(' ');
};

const getCorrectAnswerProgression = (txt) => {
  const items = txt.split(' ');
  let serchInteger;
  if (items[0] === '..') {
    const stepProgression = Number(items[2]) - Number(items[1]);
    serchInteger = Number(items[1]) - Number(stepProgression);
    return String(serchInteger);
  }
  for (let i = 1; i < items.length; i += 1) {
    if (items[i] === '..') {
      const stepProgression = Number(items[1]) - Number(items[0]);
      serchInteger = Number(items[0]) + stepProgression * i;
      break;
    }
  }
  return String(serchInteger);
};

const getQuestionAndAnswerProgression = () => {
  const question = getQuestionProgression();
  const answer = getCorrectAnswerProgression(question);
  return [question, answer];
};

const toPlayProgression = () => toGame(taskProg, getQuestionAndAnswerProgression);

export default toPlayProgression;
