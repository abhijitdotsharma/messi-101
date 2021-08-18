let readlineSync = require('readline-sync');


//welcome message
let playerName = readlineSync.question('What is your name? -> ');
console.log(`Hi ${playerName}, welcome to Messi 101 `);

console.log('----------------------------------------------------------')

//questions and answers -> array of objects
let questions = [
  {
    question : "What is the name of Leo's home city ? ",
    answer : 'rosario'
  },{
    question : 'what was his jersey first number in the senior team 7/10/19/30 ? ',
    answer : '30'
  },{
    question : 'Who assisted in his first senior team goal ronaldinho/eto/xavi ? ',
    answer : 'ronaldinho'
  },{
    question : 'Against which team did he score his first hattrick realmadrid/atheleticomadrid/granada? ',
    answer : 'realmadrid'
  },{
    question : 'His highest goals in a single season 107/91/74 ? ',
    answer : '91'
  },{
    question: 'His last goal in Barca colors were against : celta-vigo / eibar / athletico ?',
    answer : 'celta-vigo'
  }
]
//hall of fame
let highscore = [
  {
    name : 'Abhijit',
    score : 4,
  },{
    name : "Pep Guardiola ",
    score : 3,
  }
]

let score = 0;


function play(ques, ans){
  let response = readlineSync.question(ques);
  if(response === ans){
    console.log('Correct !!!');
    score = score + 1;
  }else{
    console.log('Wrong !!!');
  }
  console.log('Current score : ', score);
  console.log('=======================================')
}

for(let i = 0, n = questions.length; i < n; i++){
  play(questions[i].question, questions[i].answer)
}

console.log('And Your score is : ', score);
console.log('No matter what you scored, never forget that Messi is the G.O.A.T ')
console.log(`---Check out the Hall of Fame---`)
for(let i = 0, n = highscore.length; i < n; i++){
  console.log(highscore[i].name + " : " + highscore[i].score);
}
console.log(`Ping me if you scored higher, And I will update the hall of fame`);
