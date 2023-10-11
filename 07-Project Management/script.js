function logout() {
    window.location.href = "Login.html";
  }
let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <strong>${task.description}</strong>
            <select onchange="updateStatus(${index}, this)">
                <option value="pending" ${task.status === 'pending' ? 'selected' : ''}>Pending</option>
                <option value="inprogress" ${task.status === 'inprogress' ? 'selected' : ''}>In Progress</option>
                <option value="completed" ${task.status === 'completed' ? 'selected' : ''}>Completed</option>
            </select>
            <input type="button" value="Delete" onclick="deleteTask(${index})">
        `;
        taskList.appendChild(taskElement);
    });
}

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const description = newTaskInput.value.trim();
    
    if (description !== '') {
        tasks.push({ description, status: 'pending' });
        newTaskInput.value = '';
        renderTasks();
    }
}

function updateStatus(index, selectElement) {
    tasks[index].status = selectElement.value;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Initial render
renderTasks();
