let add = document.querySelector('#add');
let input = document.querySelector('input');
let id = 1;

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        if(input.value.trim() === '') {
            input.setAttribute('placeholder', 'No value added.....');
        } else {
            addTask();
            incomplete();
        }
        if(input.hasAttribute('placeholder')) {
            setTimeout(() => {
                input.setAttribute('placeholder', 'Add a task');
            }, 1500);
        }
    }
});

add.addEventListener('click', (e) => {
    if(input.value.trim() === '') {
        input.setAttribute('placeholder', 'No value added.....');
    } else {
        addTask();
        incomplete();
    }
    if(input.hasAttribute('placeholder')) {
        setTimeout(() => {
            input.setAttribute('placeholder', 'Add a task');
        }, 1500);
    }
});

function addTask() {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.id = `task-${id}`;
    li.innerHTML = `<p>${input.value}</p>
    <button type="button" class="green cBtn">Complete</button>
    <button type="button" class="red dBtn">Delete</button>`;
    ul.append(li);
    let cBtn = li.querySelector('.cBtn');
    let dBtn = li.querySelector('.dBtn');
    cBtn.addEventListener('click', () => {
        complete();
        li.setAttribute('class', 'completed');
        disabled(cBtn, dBtn);
        style(cBtn, dBtn);
    });
    dBtn.addEventListener('click', () => {
        li.remove();
        decrement();
    })
    id++;
    input.value = '';
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

function incomplete() {
    let incompleteCount = document.querySelector('.incomplete');
    incompleteCount.innerHTML = Number(incompleteCount.innerHTML) + 1;
}

function complete() {
    let completeCount = document.querySelector('.complete');
    completeCount.innerHTML = Number(completeCount.innerHTML) + 1;
    decrement();
}

function decrement() {
    let incompleteCount = document.querySelector('.incomplete');
    incompleteCount.innerHTML = Number(incompleteCount.innerHTML) - 1;
}