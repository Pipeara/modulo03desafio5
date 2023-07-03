# Lista de Funciones y Métodos Utilizados

A continuación se presenta una lista de funciones y métodos utilizados en el código para administrar y mostrar una lista de tareas en una página web.

## Funciones:

1. `addTask()`: Agrega una nueva tarea al arreglo `tasks` cuando se hace clic en el botón "Agregar Tarea" en la página web. La función valida que solo se ingresen letras y no números antes de agregar la tarea.

2. `generateRandomId()`: Genera un número aleatorio para el ID de una nueva tarea.

3. `isValidInput(input)`: Verifica si el valor ingresado solo contiene letras y espacios, sin números.

4. `deleteTask(index)`: Elimina una tarea del arreglo `tasks` en la posición `index`, actualiza la lista de tareas en la página web y el contador de tareas.

5. `toggleCompleted(index)`: Marca una tarea como completada o no completada (cambia el valor de la propiedad `completed`) cuando se hace clic en el botón "Cambiar" o en el checkbox de la tarea.

6. `updateTaskCount()`: Actualiza el contador de tareas totales y tareas completadas en la página web.

7. `createTaskRow(task, index)`: Crea una fila de tabla HTML para una tarea dada y su índice en el arreglo `tasks`.

8. `updateTasksList()`: Actualiza la lista de tareas en la página web mostrando todas las tareas en la tabla.

## Métodos de arreglo utilizados:

1. `splice(index, 1)`: Utilizado en la función `deleteTask(index)` para eliminar una tarea del arreglo `tasks` en la posición `index`.

2. `forEach((task, index) => { ... })`: Utilizado en la función `updateTasksList()` para recorrer todas las tareas y crear la tabla HTML con sus datos.

3. `reduce((count, task) => count + (task.completed ? 1 : 0), 0)`: Utilizado en la función `updateTaskCount()` para contar el número de tareas completadas utilizando el método `reduce()`.

Con estas funciones y métodos, el código puede agregar tareas, borrar tareas, marcar tareas como completadas y contar el total de tareas y tareas completadas en la página web.
