// Arreglo que almacenará las tareas
let tasks = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Estudiar para el examen', completed: false },
    { id: 3, description: 'Limpiar la casa', completed: false },
];

// Función para agregar una tarea
function addTask() {
    const inputTask = document.getElementById('input-task');
    const description = inputTask.value.trim();

    if (isValidInput(description)) {
        const newTask = {
            id: generateRandomId(),
            description: description,
            completed: false,
        };
        tasks.push(newTask);
        inputTask.value = '';
        updateTasksList();
        updateTaskCount();
    } else {
        alert('Por favor, ingresa solo letras y no números.');
    }
}

function generateRandomId() {
    return Math.floor(Math.random() * 1000000) + 1;
}

// para validar que se ingresen solo letras y no números
function isValidInput(input) {
    return /^[A-Za-z\s]+$/.test(input);
}

// Función para eliminar una tarea
function deleteTask(index) {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
        tasks.splice(index, 1);
        updateTasksList();
        updateTaskCount();
    }
}

// Función para marcar una tarea como completada
function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskCount();
}

// Función para contar el total de tareas y tareas realizadas
function updateTaskCount() {
    const totalTasksSpan = document.getElementById('total-tasks');
    const completedTasksSpan = document.getElementById('completed-tasks');

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    totalTasksSpan.textContent = totalTasks;
    completedTasksSpan.textContent = completedTasks;
}

// Función para crear una fila de tarea en la tabla
function createTaskRow(task, index) {
    return `
        <tr>
            <td>${task.id}</td>
            <td>${task.description}</td>
            <td>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleCompleted(${index})">
            </td>
            <td>
                <button onclick="deleteTask(${index})">🗑️</button>
            </td>
        </tr>
    `;
}

// Función para actualizar la lista de tareas en la página
function updateTasksList() {
    const tbodyTasks = document.getElementById('tbody-tasks');
    tbodyTasks.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskRow = createTaskRow(task, index);
        tbodyTasks.innerHTML += taskRow;
    });
}

// Al cargar la página, actualizar la lista de tareas y el conteo inicial
window.onload = () => {
    updateTasksList();
    updateTaskCount();
};
