var tareas = [
    { id: 1, tarea: "Caminar" },
    { id: 2, tarea: "Leer" },
    { id: 3, tarea: "Bailar" },
    { id: 4, tarea: "Nadar" },
  ];
/* valores iniciales minimo 3 */
  const padre = document.getElementById("padre");
  /* definimos al padre */
  
  const totalElemento = document.createElement("p");
  /* creamos el parrafo para el total */
  totalElemento.textContent = "Total: " + tareas.length; // Contabilizar el número de tareas
  /* cuento el largo de las tareas asi super izi */
  totalElemento.classList.add("finalizados");
  /* creo la clase finalizados para mantener el orden ya que como estaba no se veia bien */
  padre.appendChild(totalElemento);
  /* lo agregamos al padre */
  
  const realizadasElemento = document.createElement("p");
  /* creamos el parrafo realizado */
  realizadasElemento.textContent = "Realizadas: 0";
  /* aun sin modificar */
  realizadasElemento.classList.add("finalizados");
  /* agregamos a la misma clase que esta ordenado en css */
  padre.appendChild(realizadasElemento);
  /* agregamos al padre */
  
  const papa = document.getElementById("papa");
  /* creamos un padre medio fake */
  
  const idElemento = document.createElement("p");
  /* agregamos un parrafo al padre fake */
  idElemento.classList.add("derecha");
  /* creamos una clase para mantener orden en css */
  idElemento.textContent = "ID";
  /* escribimos ID */
  papa.appendChild(idElemento);
  /* agregamos al padre fake */
  
  const tareaElemento = document.createElement("p");
  /* creamos el parrafo tarea */
  tareaElemento.classList.add("derecha");
  /* lo agregamos a una clase que tiene su css */
  tareaElemento.textContent = "Tarea";
  /* agregamos el contenido Tarea */
  papa.appendChild(tareaElemento);
  /* agregamos a padre faker */
  
  tareas.forEach((tarea) => {
    /* usamos foreach y el arrow para demostrar maestria :V */
    const idColumna = document.createElement("p");
    /* creamos idcolumna en un parrafo */
    idColumna.textContent = tarea.id;
    /* escribimos la id por cada linea */
    idColumna.classList.add("derecha");
    /* le damos los mismos estilos css que el papa  */
    papa.appendChild(idColumna);
    /* agregamos al papa falso */
  
    const tareaColumna = document.createElement("p");
    /* cvreamos la tarea en parrafo */
    tareaColumna.textContent = tarea.tarea;
    /* agregamos linea a linea la tarea */
    tareaColumna.classList.add("derecha");
    /* usamos el mismo css que el papa faker */
    papa.appendChild(tareaColumna);
    /* lo agregamos al papa faker */
  });
  
  