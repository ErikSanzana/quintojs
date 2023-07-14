const tareas = [
  { id: 1, tarea: "Caminar", realizada: false },
  { id: 2, tarea: "Leer", realizada: false },
  { id: 3, tarea: "Bailar", realizada: false },
  { id: 4, tarea: "Nadar", realizada: false },
];
/* listado base */

const padre = document.getElementById("padre");
/* padre del div de la izquierda */
const papa = document.getElementById("papa");
/* padre del div derecho */
const tabla = document.createElement("table");
/* crear tabla */
tabla.classList.add("table");
/* agregar una clase tabla para agregarle cositas al css */
const encabezado = document.createElement("thead");
/* crear elementos para la tabla */
const encabezadoFila = document.createElement("tr");
const idEncabezado = document.createElement("th");
const tareaEncabezado = document.createElement("th");
const checkboxEncabezado = document.createElement("th");
const deleteButtonEncabezado = document.createElement("th");
const cuerpo = document.createElement("tbody");
let tareasRealizadas = 0;
/* contador de tareas realizadas */

document.getElementById("buscar").addEventListener("click", function () {
  var tareaInput = document.getElementById("newTarea").value;
  /* al presionar el boton buscar con el click iniciar la funcion
   donde crea una variable que almacena el value de la nuevatarea */

  if (tareaInput === "") {
    alert("No has introducido la nueva tarea");
    return;
  }
/* si esta en blanco se cancela la fiesta con el return como dice alba y mando un msg
 */
  const nuevaTarea = {
    id: tareas.length + 1,
    /* asignamos una id que es largo actual + 1 para tener el orden */
    tarea: tareaInput,
    /* que cosa escribi */
    realizada: false,
    /* inicializamos en false como solicito alba */
  };

  /* 1. Agregar tareas con descripción al llenar el input y presionar el botón agregar tarea, la
tarea es agregada al arreglo y luego la lista en la página web se actualiza (2 puntos).
 */
  tareas.push(nuevaTarea);

  /* generar tabla actualizada */
  generarTabla();

/* limpiar cuadro de texto */
  document.getElementById("newTarea").value = "";
});

function generarTabla() {
  idEncabezado.textContent = "ID";
  /* escribimos id */
  tareaEncabezado.textContent = "Tarea";
  /* escribimos tarea */
  checkboxEncabezado.textContent = ""; 
    /* LIMPIAR */
  deleteButtonEncabezado.textContent = ""; 
  /* LIMPIAR */

  encabezadoFila.append(
    idEncabezado,
    tareaEncabezado,
    checkboxEncabezado,
    deleteButtonEncabezado
  );
  encabezado.appendChild(encabezadoFila);
  tabla.appendChild(encabezado);

  /* limpiar todo */
  cuerpo.innerHTML = "";

  tareas.forEach((tarea) => {
    const fila = document.createElement("tr");
    const idColumna = document.createElement("td");
    const tareaColumna = document.createElement("td");
    const checkboxColumna = document.createElement("td");
    const deleteButtonColumna = document.createElement("td");

    idColumna.textContent = tarea.id;
    tareaColumna.textContent = tarea.tarea;
/* rellenando */
    if (tarea.realizada) {
      tareaColumna.classList.add("realizada");
    }

    const checkbox = document.createElement("input");
    checkbox.addEventListener("click", () => {
      tarea.realizada = checkbox.checked;
      if (checkbox.checked) {
        tareasRealizadas++;
        tareaColumna.classList.add("realizada");
      } else {
        tareasRealizadas--;
        tareaColumna.classList.remove("realizada");
      }
      realizadasElemento.textContent = `Realizadas: ${tareasRealizadas}`;
    });
    checkbox.type = "checkbox";
    checkbox.checked = tarea.realizada;
    checkbox.classList.add(`checkbox-${tarea.id}`);
    checkboxColumna.appendChild(checkbox);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add(`delete-${tarea.id}`);
    deleteButton.addEventListener("click", () => {
      fila.remove();
      tareas.splice(
        tareas.findIndex((item) => item.id === tarea.id),
        1
      );
      /* 2. Borrar una tarea al hacer click en el botón que acompaña a la tarea. Se debe borrar el
dato del arreglo y actualizar la lista. (2 puntos). */

      if (tarea.realizada) {
        tareasRealizadas--;
        realizadasElemento.textContent = `Realizadas: ${tareasRealizadas}`;
        /* 3. Contar el total de tareas, mantener actualizada esta cuenta cuando se agregue una
tarea nueva o se borre una tarea (2 puntos).
 */
      }

      generarTabla();
      /* REGENERA TABLA POST ELIMINAR TAREA */
    });
    deleteButtonColumna.appendChild(deleteButton);

    fila.append(idColumna, tareaColumna, checkboxColumna, deleteButtonColumna);
    cuerpo.appendChild(fila);
  });

  tabla.appendChild(cuerpo);
  papa.innerHTML = ""; 
  /* limpiar contenido anterior */
  papa.appendChild(tabla);

  let totalElemento = document.getElementById("totalElemento");
  let realizadasElemento = document.getElementById("realizadasElemento");

  if (!totalElemento) {
    totalElemento = document.createElement("p");
    totalElemento.id = "totalElemento";
    totalElemento.classList.add("finalizados");
    padre.appendChild(totalElemento);
  }

  if (!realizadasElemento) {
    realizadasElemento = document.createElement("p");
    realizadasElemento.id = "realizadasElemento";
    realizadasElemento.classList.add("finalizados");
    padre.appendChild(realizadasElemento);
  }
/* TRABAJO TERMINADO NOS VEMOS EN DISNEY */
  totalElemento.textContent = `Total: ${tareas.length}`;
  realizadasElemento.textContent = `Realizadas: ${tareasRealizadas}`;
}

generarTabla(); 
