import toGame from '../engine.js';
import { minValue, maxValue, getRndInteger } from '../index.js';

const taskProg = 'What number is missing in the progression?';

const getQuestionProgression = () => {
  const arr = [getRndInteger(minValue, maxValue)];
  const minStep = 2;
  const maxStep = 10;
  const minIndexOfSecretElement = 0;
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

const getCorrectAnswerProgr = (txt) => {
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

const toPlayProgression = () => toGame(taskProg, getQuestionProgression, getCorrectAnswerProgr);

export default toPlayProgression;
