import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => ((num % 2) === 0);

const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return (result);
};

export const toGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let acc = 0;
  const minValue = 1;
  const maxValue = 100;
  while (acc < 3) {
    const getInteger = getRndInteger(minValue, maxValue);
    console.log(`Question: ${getInteger}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = check(getInteger);
    if (answer === correctAnswer) {
      console.log('Correct!');
      acc += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }
  if (acc === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
