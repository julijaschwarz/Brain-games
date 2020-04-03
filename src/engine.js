import readlineSync from 'readline-sync';

const toGame = (task, getQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(task);
  const roundCount = 3;
  let acc = 0;
  for (acc; acc < roundCount; acc += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }
  if (acc === roundCount) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default toGame;
