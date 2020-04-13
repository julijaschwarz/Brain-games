import toGame from '../engine.js';
import { minValue, maxValue, generateRandomNumber } from '../utils.js';

const task = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const minStep = 2;
  const maxStep = 10;
  const step = generateRandomNumber(minStep, maxStep);
  const start = generateRandomNumber(minValue, maxValue);
  for (let i = 0; i < 10; i += 1) {
    const value = start + step * i;
    progression.push(value);
  }
  const minIndexOfHiddenNumber = 0;
  const maxIndexOfHiddenNumber = 9;
  const indexOfHiddenNumber = generateRandomNumber(minIndexOfHiddenNumber, maxIndexOfHiddenNumber);
  const hiddenNumber = String(progression[indexOfHiddenNumber]);
  progression[indexOfHiddenNumber] = '..';
  const progressionWithHiddenNumber = progression.join(' ');
  return [progressionWithHiddenNumber, hiddenNumber];
};

export default () => toGame(task, getProgression);
