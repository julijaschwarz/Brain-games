import readlineSync from 'readline-sync';
import { greeting } from './index.js';

const toGame = (ask, progQuestion, corAnswer) => {
  const toGreet = greeting();
  console.log(ask);
  let acc = 0;
  while (acc < 3) {
    const question = progQuestion();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = corAnswer(question);
    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
      acc += 1;
    } else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }
  if (acc === 3) {
    console.log(`Congratulations, ${toGreet}!`);
  } else {
    console.log(`Let's try again, ${toGreet}!`);
  }
};

export default toGame;
