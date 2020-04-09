import readlineSync from 'readline-sync';

const toGame = (task, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(task);
  const roundCount = 3;
  for (let count = 0; count < roundCount; count += 1) {
    const [question, answer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default toGame;
