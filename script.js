const tasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true }
];

let filteredStatus = 'all';

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (filteredStatus === 'completed') return task.completed;
    if (filteredStatus === 'pending') return !task.completed;
    return true;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task ${task.completed ? 'completed' : ''}`;

    const span = document.createElement('span');
    span.textContent = task.title;
    li.appendChild(span);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
    completeBtn.className = 'complete';
    completeBtn.onclick = () => toggleTask(task.id);
    li.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(task.id);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.completed = !task.completed;
  renderTasks();
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index > -1) tasks.splice(index, 1);
  renderTasks();
}

function addTask(title) {
  if (!title.trim()) {
    alert('Task title cannot be empty!');
    return;
  }
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };
  tasks.push(newTask);
  renderTasks();
}

function filterTasks(status) {
  filteredStatus = status;
  renderTasks();
}

document.getElementById('taskForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('taskInput');
  addTask(input.value);
  input.value = '';
});

window.onload = renderTasks;
