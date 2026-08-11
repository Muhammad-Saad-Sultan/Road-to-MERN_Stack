let add = document.querySelector('#add');
let input = document.querySelector('input');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let id = 1;

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id >= id) {
        id = tasks[i].id + 1;
    }
}

tasks.forEach(task => {
    displayTask(task);
});

updateCounts();

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        if (input.value.trim() === '') {
            input.setAttribute('placeholder', 'No value added.....');
        } else {
            addTask();
        }

        if (input.hasAttribute('placeholder')) {
            setTimeout(() => {
                input.setAttribute('placeholder', 'Add a task');
            }, 1500);
        }
    }
});

add.addEventListener('click', () => {
    if (input.value.trim() === '') {
        input.setAttribute('placeholder', 'No value added.....');
    } else {
        addTask();
    }

    if (input.hasAttribute('placeholder')) {
        setTimeout(() => {
            input.setAttribute('placeholder', 'Add a task');
        }, 1500);
    }
});

function addTask() {
    let task = {
        id: id,
        text: input.value.trim(),
        completed: false
    };

    tasks.push(task);
    saveTasks();
    displayTask(task);
    updateCounts();

    id++;
    input.value = '';
}

function displayTask(task) {
    let ul = document.querySelector('ul');

    let li = document.createElement('li');
    li.id = `task-${task.id}`;

    let p = document.createElement('p');
    p.textContent = task.text;

    let cBtn = document.createElement('button');
    cBtn.type = 'button';
    cBtn.classList.add('green', 'cBtn');
    cBtn.textContent = 'Complete';

    let dBtn = document.createElement('button');
    dBtn.type = 'button';
    dBtn.classList.add('red', 'dBtn');
    dBtn.textContent = 'Delete';

    li.append(p, cBtn, dBtn);
    ul.append(li);

    if (task.completed) {
        li.classList.add('completed');
        disabled(cBtn, dBtn);
        style(cBtn, dBtn);
    }

    cBtn.addEventListener('click', () => {
        task.completed = true;

        li.classList.add('completed');

        disabled(cBtn, dBtn);
        style(cBtn, dBtn);

        saveTasks();
        updateCounts();
    });

    dBtn.addEventListener('click', () => {
        li.remove();

        tasks = tasks.filter(item => item.id !== task.id);

        saveTasks();
        updateCounts();
    });
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function disabled(cBtn, dBtn) {
    cBtn.setAttribute('disabled', 'disabled');
    dBtn.setAttribute('disabled', 'disabled');
}

function style(cBtn, dBtn) {
    cBtn.classList.replace('green', 'dark-green');
    cBtn.textContent = 'Completed';

    dBtn.classList.replace('red', 'dark-red');
}

function updateCounts() {
    let incompleteCount = document.querySelector('.incomplete');
    let completeCount = document.querySelector('.complete');

    let incomplete = 0;
    let complete = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            complete++;
        } else {
            incomplete++;
        }
    }

    incompleteCount.textContent = incomplete;
    completeCount.textContent = complete;
}