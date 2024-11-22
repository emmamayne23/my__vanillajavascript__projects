
const addBtn = document.querySelector('.add-btn')
const taskInput = document.querySelector('.task')
const taskList = document.querySelector('.task-list')

addBtn.addEventListener('click', function() {
    let input = taskInput.value.trim();
    let taskDiv = document.createElement('div')
        taskDiv.classList.add('task-div')

        let li = document.createElement('li')
        li.classList.add('li')
        li.innerText = input

        taskDiv.appendChild(li)

        let checkBtn = document.createElement('button')
        checkBtn.innerHTML = `<i class="fas fa-check"></i>`
        checkBtn.classList.add('check-btn')
        taskDiv.appendChild(checkBtn)

        let delBtn = document.createElement('button')
        delBtn.innerHTML = `<i class="fas fa-trash"></i>`
        delBtn.classList.add('del-btn')
        taskDiv.appendChild(delBtn)



    if (input === '') {
        alert('Please Enter  Task!!!')
    } else {
        taskList.appendChild(taskDiv)
        taskInput.value = ''
    }

    checkBtn.addEventListener('click', function() {
        checkBtn.parentElement.style.textDecoration = 'line-through'
    })

    delBtn.addEventListener('click', function() {
        delBtn.parentElement.remove()
    })
})