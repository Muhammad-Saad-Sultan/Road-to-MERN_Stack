let startBtn = document.querySelector('.start-btn');
let quiz = [
    {
        question: 'Which keyword is used to declare a block-scoped variable in JavaScript?',
        options: ['var', 'const', 'let', 'static'],
        answer: 'let',
    },
    {
        question: 'What is the output of typeof null?',
        options: ['null', 'object', 'undefined', 'boolean'],
        answer: 'object',
    },
    {
        question: 'Which method is used to convert a JSON string into a JavaScript object?',
        options: ['JSON.stringify()', 'JSON.object()', 'JSON.convert()', 'JSON.parse()'],
        answer: 'JSON.parse()',
    },
    {
        question: 'Which operator checks both value and data type in JavaScript?',
        options: ['==', '=', '===', '!='],
        answer: '===',
    },
    {
        question: 'Which array method adds an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        answer: 'push()',
    },
    {
        question: 'What will Boolean("") return?',
        options: ['true', 'undefined', 'false', 'null'],
        answer: 'false',
    },
    {
        question: 'Which event occurs when a user clicks on an HTML element?',
        options: ['onclick', 'onchange', 'onmouseover', 'onload'],
        answer: 'onclick',
    },
    {
        question: 'Which loop is guaranteed to execute at least once?',
        options: ['do...while', 'for', 'while', 'for...of'],
        answer: 'do...while',
    },
    {
        question: 'Which method is used to remove the last element from an array?',
        options: ['shift()', 'splice()', 'slice()', 'pop()'],
        answer: 'pop()',
    },
    {
        question: 'What is the result of 2 + "2" in JavaScript?',
        options: ['4', '22', 'NaN', 'undefined'],
        answer: '22',
    }
];
let id = 0;
let score = 0;
let len = quiz.length;
let reviews = [];
let content = () => document.querySelector('.main');
let mainContent = content();

startBtn.addEventListener('click', () => {
    mainContent.classList.remove('home');
    render();
});

function render() {
    mainContent.style.setProperty('--before-width', `${(id+1)*10}%`);
    mainContent.innerHTML = `<h2>Question ${id+1} of ${len}</h2>`;
    mainContent.innerHTML += `<h3>Question: ${quiz[id].question}</h3>`;
    mainContent.innerHTML += `<p>*Choose the correct answer</p>`;
    let options = '';
    for(let i=0; i<quiz[id].options.length; i++) {
        options += `<li>${quiz[id].options[i]}</li>`;
    }
    mainContent.innerHTML += `<ul>${options}</ul>`;
    let li = mainContent.querySelectorAll('li');
    li.forEach((li) => {
        li.addEventListener('click', () => {
            if(li.textContent === quiz[id].answer) {
                li.style.backgroundColor = 'lightgreen';
                score++;
                reviews.push('Correct');
            } else {
                li.style.backgroundColor = 'tomato';
                li.parentElement.childNodes.forEach((li) => {
                    if(li.textContent === quiz[id].answer) {
                        li.style.backgroundColor = 'lightgreen';
                    }
                })
                reviews.push('Incorrect');
            }
            if(id < len-1) {
                mainContent.innerHTML += `<div class='btn-wrapper'><button class='burlywood next'>Next</button></div>`;
            } else {
                mainContent.innerHTML += `<div class='btn-wrapper'><button class='green next'>Submit</button></div>`;
            }
            let nextBtn = mainContent.querySelector('.next');
            nextBtn.addEventListener('click', () => {
                if(id<len-1) {
                    id++;
                    render(mainContent);
                } else {
                    submit(score, mainContent);
                }
            })
        });
    });
}

function submit(score) {
    let percentage = (score/len)*100;
    let resultContent = result(score, percentage);
    mainContent.innerHTML = `<h1 class='result'>Result</h1>`;
    mainContent.innerHTML += `<div class='result-content'>${resultContent}</div>`;
    mainContent.innerHTML += `<div class='btn-wrapper'><button class='burlywood restart'>Restart Quiz</button></div>`;
    let restartBtn = mainContent.querySelector('.restart');
    restartBtn.addEventListener('click', () => {restart()});
}

function result(score, percentage) {
    let resultContent = '';
    resultContent += `<p><b>Score: </b>You scored ${score} out of ${len}.</p>`;
    resultContent += `<p><b>Percentage: </b>${percentage}%.</p>`;
    if(percentage > 80) {
        resultContent += `<p><b>Message: </b>Excellent!</p>`;
    } else if(percentage >= 50 && percentage <= 80) {
        resultContent += `<p><b>Message: </b>Good Job!</p>`;
    } else {
        resultContent += `<p><b>Message: </b>Keep practicing!</p>`;
    }
    let answers = '';
    reviews.forEach((review, i) => {
        answers += `<p><b>Question ${i+1}:</b> ${review}</p>`;
    });
    resultContent += `<p><b>Review: </b></p>`;
    resultContent += `<div class='grid'>${answers}</div>`;

    return resultContent;
}

function restart() {
    shuffle();
    console.log(quiz);
    id = 0;
    score = 0;
    reviews = [];
    render();
}

function shuffle() {
    for(let i=len-1; i>0; i--) {
        let randomIndex = Math.floor(Math.random() * (i+1));
        console.log(randomIndex);
        console.log(i);
        [quiz[i], quiz[randomIndex]] = [quiz[randomIndex], quiz[i]];
    }
}