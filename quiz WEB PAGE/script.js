const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionsContainer = document.getElementById('question-container')

const answerButton = document.getElementById('answer-btn')

let shuffledQuestions, currentQuestionIndex;
let quiz score = 0;

function setStatusClass(element,correct){
clearStatusClass(element)
if(correct){
element.ClassList.add("correct")
}else{
element.classList.add("wrong")
}
}

function clearStatusClass(element){
 element.classList.remove('correct')
 element.classList.remove('wrong')
 }

const questions = [
{
question: 'what is the capital of Togo?',
answer:[
{text:'Cairo',correct:false},
{text: 'Dakar',correct:false},
{text:'Lome',correct:true},
{text:'London', correct:false}
]
}

{
question: 'what is the capital of Ghana?',
answer:[
{text:'kumasi',correct:false},
{text: 'Accra',correct:true},
{text:'Tamale',correct:false},
{text:'Takoradi', correct:false}
]
}

{
question: 'where does an Eskimo live?',
answer:[
{text:'Castle',correct:false},
{text: 'Igloo',correct:true},
{text:'Water',correct:false},
{text:'Ice', correct:false}
]
}

{
question: 'The younger Kangaroo is called?',
answer:[
{text:'kid',correct:false},
{text: 'calf',correct:false},
{text:'lamb',correct:false},
{text:'joey', correct:true}
]
}

{
question: 'who is the father of computer?',
answer:[
{text:'Charles Babbage',correct:true},
{text: 'Lady Ada Loverace',correct:false},
{text:'Aln Turning',correct:false},
{text:'John Altman', correct:false}
]
}
]
