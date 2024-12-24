
// assigning variables 
const taskInput = document.querySelector('.input')
const addBtn = document.querySelector('.add-task')
const taskContainer = document.querySelector('.task-container')
const removeAllBtn = document.querySelector('.remove-all')

addBtn.addEventListener('click', function() {
    let input = taskInput.value.trim()

    let taskItem = document.createElement('div')
    taskItem.classList.add('task-item')

    let task = document.createElement('li')
    task.classList.add('task')
    task.innerText = input

    taskItem.appendChild(task)

    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`
    checkBtn.classList.add('check-btn')
    task.append(checkBtn)
    
    let delBtn = document.createElement('button')
    delBtn.innerHTML = `<i class="fas fa-trash"></i>`
    delBtn.classList.add('del-btn')
    task.append(delBtn)

    if(!input) {
        alert('Please Enter Task')
    } else {
        taskContainer.appendChild(taskItem)
        taskInput.value = '' 
        removeAllBtn.style.display = 'block'
    }

    checkBtn.addEventListener('click', function() {
        this.parentElement.style.textDecoration = 'line-through'
    })

    delBtn.addEventListener('click', function() {
        this.parentElement.parentElement.remove()
    })

    removeAllBtn.addEventListener('click', function() {
        taskItem.remove()
    })

})