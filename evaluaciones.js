const preguntas = [
    { 
      pregunta: "¿Cuál es el límite de velocidad en zona escolar?", 
      opciones: ["20 km/h", "40 km/h", "60 km/h"], 
      correcta: "20 km/h"
    },
    { 
      pregunta: "¿Qué significa una señal de tránsito en forma de triángulo invertido?", 
      opciones: ["Peligro", "Ceda el paso", "Pare"], 
      correcta: "Ceda el paso"
    },
    { 
        pregunta: "¿Cuál es el color de una señal de tránsito de advertencia?", 
        opciones: ["Rojo", "Amarillo", "Verde"], 
        correcta: "Amarillo"  // La respuesta correcta es "Amarillo".
      },
      { 
        pregunta: "¿A qué edad es recomendable empezar a conducir?", 
        opciones: ["17 años", "18 años", "15 años"], 
        correcta: "18 años"  // La respuesta correcta es "18 años".
      },
      {
        pregunta: "¿Qué se recomienda hacer antes de un viaje?",
        opciones: ["Verificar el auto", "Ver las luces", "Ver las llantas"],
        correcta: "Verificar el auto"  // La respuesta correcta es "Verificar el auto".
      },
      { 
        pregunta: "¿Qué significa una señal de 'Ceder el paso'?", 
        opciones: ["Debe detenerse", "Debe ceder el paso", "Debe seguir"], 
        correcta: "Debe ceder el paso" 
      },
      { 
        pregunta: "¿Cuál es la velocidad mínima en carretera?", 
        opciones: ["50 km/h", "60 km/h", "80 km/h"], 
        correcta: "60 km/h" 
      },
      { 
        pregunta: "¿Qué debe hacer si un ciclista se encuentra delante?", 
        opciones: ["Esperar para adelantar con seguridad", "Adelantar rápidamente", "Tocar la bocina"], 
        correcta: "Esperar para adelantar con seguridad" 
      },
      { 
        pregunta: "¿Qué significa una señal de 'No estacionar'?", 
        opciones: ["No se permite estacionar", "Puede estacionar por 10 minutos", "Debe estacionar con cuidado"], 
        correcta: "No se permite estacionar" 
      },
      { 
        pregunta: "¿Qué hacer si un semáforo está en verde pero un peatón está cruzando?", 
        opciones: ["Esperar a que el peatón cruce", "Tocar la bocina", "Seguir conduciendo"], 
        correcta: "Esperar a que el peatón cruce" 
      },
      { 
        pregunta: "¿Qué significa una señal de 'No adelantar'?", 
        opciones: ["Prohibido adelantar", "Adelantar con precaución", "Adelantar si es seguro"], 
        correcta: "Prohibido adelantar" 
      },
      { 
        pregunta: "¿Qué significa una luz intermitente amarilla?", 
        opciones: ["Precaución", "Pare", "Siga"], 
        correcta: "Precaución" 
      },
      { 
        pregunta: "¿Qué hacer si se encuentra con un vehículo de emergencia?", 
        opciones: ["Detenerse a un lado del camino", "Aumentar la velocidad", "Seguir conduciendo"], 
        correcta: "Detenerse a un lado del camino" 
      },
      { 
        pregunta: "¿Qué significa una señal de 'Curva peligrosa'?", 
        opciones: ["Reducir la velocidad", "Aumentar la velocidad", "Detenerse"], 
        correcta: "Reducir la velocidad" 
      },
      { 
        pregunta: "¿Qué hacer si hay niebla?", 
        opciones: ["Reducir la velocidad", "Aumentar la velocidad", "Mantener la misma velocidad"], 
        correcta: "Reducir la velocidad" 
      },
      { 
        pregunta: "¿Qué significa una señal de 'Prohibido girar en U'?", 
        opciones: ["No se permite girar en U", "Gire con precaución", "Gire a la derecha"], 
        correcta: "No se permite girar en U" 
      },
      { 
        pregunta: "¿Qué hacer si un autobús escolar tiene luces intermitentes?", 
        opciones: ["Detenerse y esperar", "Aumentar la velocidad", "Seguir sin detenerse"], 
        correcta: "Detenerse y esperar" 
      },
      { 
        pregunta: "¿Qué hacer si hay un cruce de ferrocarril sin barreras?", 
        opciones: ["Detenerse y asegurarse de que no viene un tren", "Aumentar la velocidad", "Tocar la bocina"], 
        correcta: "Detenerse y asegurarse de que no viene un tren" 
      },
      {
  pregunta: "¿Qué significa una señal de 'Stop'?", 
  opciones: ["Detenerse completamente", "Reducir la velocidad", "Seguir si no hay vehículos"], 
  correcta: "Detenerse completamente" 
},
{ 
  pregunta: "¿Qué hacer si un vehículo delante frena repentinamente?", 
  opciones: ["Frenar de inmediato", "Desviar para adelantar", "Tocar la bocina"], 
  correcta: "Frenar de inmediato" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Límite de velocidad 80 km/h'?", 
  opciones: ["No superar los 80 km/h", "Mantenerse a 80 km/h", "Mínimo 80 km/h"], 
  correcta: "No superar los 80 km/h" 
},
{ 
  pregunta: "¿Qué hacer en un cruce con semáforo amarillo fijo?", 
  opciones: ["Acelerar para cruzar", "Reducir la velocidad", "Detenerse"], 
  correcta: "Reducir la velocidad" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Calle sin salida'?", 
  opciones: ["La calle termina en un punto", "Es una vía cerrada", "Debe seguir con precaución"], 
  correcta: "La calle termina en un punto" 
},
{ 
  pregunta: "¿Qué hacer si los frenos del vehículo fallan?", 
  opciones: ["Usar el freno de mano", "Seguir conduciendo", "Aumentar la velocidad para frenar"], 
  correcta: "Usar el freno de mano" 
},
{ 
  pregunta: "¿Qué hacer en caso de neblina intensa?", 
  opciones: ["Aumentar la velocidad", "Encender las luces bajas", "Usar las luces intermitentes"], 
  correcta: "Encender las luces bajas" 
},
{ 
  pregunta: "¿Cuál es el significado de una señal de 'Peatón cruzando'?", 
  opciones: ["Ceder el paso a peatones", "Seguir con precaución", "Detenerse inmediatamente"], 
  correcta: "Ceder el paso a peatones" 
},
{ 
  pregunta: "¿Qué hacer cuando se aproxima una ambulancia?", 
  opciones: ["Detenerse en el carril derecho", "Aumentar la velocidad", "Ignorarla"], 
  correcta: "Detenerse en el carril derecho" 
},
{ 
  pregunta: "¿Qué debe hacer si hay una señal de 'No girar a la izquierda'?", 
  opciones: ["No girar a la izquierda", "Girar con precaución", "Girar solo si no hay vehículos"], 
  correcta: "No girar a la izquierda" 
},
{ 
  pregunta: "¿Qué hacer si los limpiaparabrisas no funcionan en plena lluvia?", 
  opciones: ["Detenerse en un lugar seguro", "Aumentar la velocidad", "Seguir conduciendo"], 
  correcta: "Detenerse en un lugar seguro" 
},
{ 
  pregunta: "¿Qué significa una señal de 'No entrar'?", 
  opciones: ["No puede ingresar", "Solo vehículos pesados", "Solo motocicletas permitidas"], 
  correcta: "No puede ingresar" 
},
{ 
  pregunta: "¿Qué hacer en una intersección sin señalización?", 
  opciones: ["Ceder el paso al vehículo que llega primero", "Aumentar la velocidad", "Ignorar a los demás vehículos"], 
  correcta: "Ceder el paso al vehículo que llega primero" 
},
{ 
  pregunta: "¿Cuál es la acción correcta al ver una señal de 'Animales sueltos'?", 
  opciones: ["Reducir la velocidad", "Aumentar la velocidad", "Tocar la bocina"], 
  correcta: "Reducir la velocidad" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Estacionamiento prohibido'?", 
  opciones: ["No estacionar en esa área", "Estacionar con precaución", "Estacionar solo por 5 minutos"], 
  correcta: "No estacionar en esa área" 
},
{ 
  pregunta: "¿Qué hacer si el semáforo está en rojo?", 
  opciones: ["Detenerse completamente", "Reducir la velocidad", "Continuar si no hay otros vehículos"], 
  correcta: "Detenerse completamente" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Desvío'?", 
  opciones: ["Debe seguir una ruta alternativa", "Debe reducir la velocidad", "Debe detenerse"], 
  correcta: "Debe seguir una ruta alternativa" 
},
{ 
  pregunta: "¿Qué hacer en un paso peatonal?", 
  opciones: ["Ceder el paso a los peatones", "Aumentar la velocidad", "Tocar la bocina para que crucen rápido"], 
  correcta: "Ceder el paso a los peatones" 
},
{ 
  pregunta: "¿Qué hacer si el vehículo pierde el control en una curva?", 
  opciones: ["Frenar suavemente", "Acelerar para corregir", "Girar bruscamente el volante"], 
  correcta: "Frenar suavemente" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Ciclovía'?", 
  opciones: ["Solo ciclistas permitidos", "Prohibido el paso a ciclistas", "Solo peatones permitidos"], 
  correcta: "Solo ciclistas permitidos" 
},
{ 
  pregunta: "¿Qué debe hacer si ve una señal de 'No rebasar'?", 
  opciones: ["No adelantar a otros vehículos", "Adelantar con precaución", "Adelantar solo si es seguro"], 
  correcta: "No adelantar a otros vehículos" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Peligro'? ", 
  opciones: ["Precaución en la vía", "Aumentar la velocidad", "Seguir conduciendo"], 
  correcta: "Precaución en la vía" 
},
{ 
  pregunta: "¿Qué hacer si se enfrenta a una vía inundada?", 
  opciones: ["Detenerse y evitar cruzarla", "Aumentar la velocidad para cruzar rápido", "Tocar la bocina"], 
  correcta: "Detenerse y evitar cruzarla" 
},
{ 
  pregunta: "¿Qué hacer si un semáforo está en amarillo intermitente?", 
  opciones: ["Continuar con precaución", "Detenerse completamente", "Aumentar la velocidad"], 
  correcta: "Continuar con precaución" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Fin de autopista'?", 
  opciones: ["Termina la autopista", "Continuar a la misma velocidad", "Cambio de límite de velocidad"], 
  correcta: "Termina la autopista" 
},
{ 
  pregunta: "¿Qué hacer si ve una señal de 'Resbaladizo cuando está mojado'?", 
  opciones: ["Reducir la velocidad", "Aumentar la velocidad", "Ignorarla si no está lloviendo"], 
  correcta: "Reducir la velocidad" 
},
{ 
  pregunta: "¿Qué hacer si se aproxima a una zona de obras?", 
  opciones: ["Reducir la velocidad", "Aumentar la velocidad", "Seguir conduciendo como de costumbre"], 
  correcta: "Reducir la velocidad" 
},
{ 
  pregunta: "¿Qué hacer si el vehículo se queda sin combustible?", 
  opciones: ["Detenerse en un lugar seguro", "Aumentar la velocidad", "Seguir conduciendo hasta que se apague"], 
  correcta: "Detenerse en un lugar seguro" 
},
{ 
  pregunta: "¿Qué hacer si ve una señal de 'Prohibido peatones'?", 
  opciones: ["No se permite el paso a peatones", "Solo bicicletas permitidas", "Seguir conduciendo"], 
  correcta: "No se permite el paso a peatones" 
},
{ 
  pregunta: "¿Qué hacer si el vehículo patina en el hielo?", 
  opciones: ["Girar suavemente el volante en la dirección del derrape", "Frenar bruscamente", "Acelerar"], 
  correcta: "Girar suavemente el volante en la dirección del derrape" 
},
{ 
  pregunta: "¿Qué hacer si el vehículo tiene un pinchazo en plena carretera?", 
  opciones: ["Detenerse en un lugar seguro", "Aumentar la velocidad", "Seguir conduciendo"], 
  correcta: "Detenerse en un lugar seguro" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Área escolar'?", 
  opciones: ["Reducir la velocidad", "Aumentar la velocidad", "Seguir conduciendo sin precaución"], 
  correcta: "Reducir la velocidad" 
},
{
    
  pregunta: "¿Qué hacer si el parabrisas se empaña mientras conduces?", 
  opciones: ["Encender el aire acondicionado", "Bajar las ventanas", "Detenerse inmediatamente"], 
  correcta: "Encender el aire acondicionado" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Doble sentido'?", 
  opciones: ["Tráfico en ambas direcciones", "Solo una dirección permitida", "Girar a la izquierda"], 
  correcta: "Tráfico en ambas direcciones" 
},
{ 
  pregunta: "¿Qué hacer si un semáforo está apagado?", 
  opciones: ["Tratar la intersección como un cruce de cuatro vías", "Aumentar la velocidad", "Ignorar la señalización"], 
  correcta: "Tratar la intersección como un cruce de cuatro vías" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Estrechamiento de calzada'?", 
  opciones: ["El carril se estrecha", "Debe detenerse", "Debe girar a la izquierda"], 
  correcta: "El carril se estrecha" 
},
{ 
  pregunta: "¿Qué hacer si ves una señal de 'Desvío'? ", 
  opciones: ["Seguir la ruta alternativa", "Ignorarla", "Aumentar la velocidad"], 
  correcta: "Seguir la ruta alternativa" 
},
{ 
  pregunta: "¿Qué significa una señal de 'No girar a la derecha'?", 
  opciones: ["Está prohibido girar a la derecha", "Debe girar a la derecha", "Puede girar si no hay tráfico"], 
  correcta: "Está prohibido girar a la derecha" 
},
{ 
  pregunta: "¿Qué hacer si el vehículo comienza a derrapar?", 
  opciones: ["Girar suavemente hacia la dirección del derrape", "Frenar bruscamente", "Aumentar la velocidad"], 
  correcta: "Girar suavemente hacia la dirección del derrape" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Prohibido estacionar'?", 
  opciones: ["No se permite estacionar", "Solo estacionar temporalmente", "Debe estacionar con precaución"], 
  correcta: "No se permite estacionar" 
},
{ 
  pregunta: "¿Qué hacer si el vehículo comienza a sobrecalentarse?", 
  opciones: ["Detenerse en un lugar seguro y apagar el motor", "Aumentar la velocidad", "Seguir conduciendo hasta llegar a un taller"], 
  correcta: "Detenerse en un lugar seguro y apagar el motor" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Carretera resbaladiza'?", 
  opciones: ["Precaución al conducir en superficies mojadas", "Aumentar la velocidad", "Seguir conduciendo como de costumbre"], 
  correcta: "Precaución al conducir en superficies mojadas" 
},
{ 
  pregunta: "¿Qué hacer si un vehículo se aproxima rápidamente detrás de ti?", 
  opciones: ["Cambiar al carril derecho si es seguro", "Aumentar la velocidad", "Detenerse inmediatamente"], 
  correcta: "Cambiar al carril derecho si es seguro" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Cruz Roja'?", 
  opciones: ["Debe detenerse por emergencias", "Debe ceder el paso a los vehículos de emergencia", "Debe girar a la izquierda"], 
  correcta: "Debe ceder el paso a los vehículos de emergencia" 
},
{ 
  pregunta: "¿Qué hacer si ves una señal de 'Cierre de carril'?", 
  opciones: ["Cambiar de carril lo antes posible", "Continuar en el mismo carril", "Acelerar para evitar el cierre"], 
  correcta: "Cambiar de carril lo antes posible" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Ceder el paso'?", 
  opciones: ["Debe ceder el paso a otros vehículos", "Debe detenerse completamente", "Puede seguir si no hay tráfico"], 
  correcta: "Debe ceder el paso a otros vehículos" 
},
{ 
  pregunta: "¿Qué hacer si el semáforo está en verde pero hay tráfico detenido en la intersección?", 
  opciones: ["Esperar fuera de la intersección hasta que sea seguro cruzar", "Aumentar la velocidad", "Continuar a través de la intersección"], 
  correcta: "Esperar fuera de la intersección hasta que sea seguro cruzar" 
},
{ 
  pregunta: "¿Qué significa una señal de 'No peatones'?", 
  opciones: ["Está prohibido el paso a peatones", "Los peatones pueden cruzar con precaución", "Los peatones deben ceder el paso a los vehículos"], 
  correcta: "Está prohibido el paso a peatones" 
},
{ 
  pregunta: "¿Qué hacer si un conductor en sentido contrario circula por tu carril?", 
  opciones: ["Reducir la velocidad y mover tu vehículo a la derecha", "Tocar la bocina y seguir adelante", "Aumentar la velocidad para evitarlo"], 
  correcta: "Reducir la velocidad y mover tu vehículo a la derecha" 
},
{ 
  pregunta: "¿Qué significa una señal de 'Peligro de avalancha'?", 
  opciones: ["Precaución, posible avalancha", "Acelerar para evitar el peligro", "Girar inmediatamente"], 
  correcta: "Precaución, posible avalancha" 
},
{ 
  pregunta: "¿Qué hacer si el vehículo comienza a patinar sobre una superficie mojada?", 
  opciones: ["Frenar suavemente y girar en la dirección del patinazo", "Acelerar", "Frenar bruscamente"], 
  correcta: "Frenar suavemente y girar en la dirección del patinazo" 
},
{ 
  pregunta: "¿Qué significa una señal de 'No adelantar'?", 
  opciones: ["Prohibido adelantar a otros vehículos", "Adelantar solo si es seguro", "Adelantar solo si no hay peatones"], 
  correcta: "Prohibido adelantar a otros vehículos" 
},
{ 
  pregunta: "¿Qué hacer si el freno de emergencia no funciona?", 
  opciones: ["Usar las marchas más bajas para reducir la velocidad", "Aumentar la velocidad", "Frenar bruscamente"], 
  correcta: "Usar las marchas más bajas para reducir la velocidad" 
},
{ 
  pregunta: "¿Qué hacer si el semáforo cambia a amarillo cuando te acercas?", 
  opciones: ["Detenerse si es seguro hacerlo", "Aumentar la velocidad para cruzar", "Ignorarlo y seguir"], 
  correcta: "Detenerse si es seguro hacerlo" 
},
{
    
  pregunta: "¿Cuál es la principal razón por la que no se debe manejar bajo los efectos del alcohol?", 
  opciones: ["Reduce los reflejos y la capacidad de reacción", "Mejora la visión", "Aumenta la concentración"], 
  correcta: "Reduce los reflejos y la capacidad de reacción" 
},
{ 
  pregunta: "¿Qué efecto tiene el alcohol en la toma de decisiones al volante?", 
  opciones: ["Reduce la capacidad de tomar decisiones correctas", "Aumenta la atención", "No afecta en absoluto"], 
  correcta: "Reduce la capacidad de tomar decisiones correctas" 
},
{ 
  pregunta: "¿Cuál es el límite legal de alcohol en sangre para manejar en la mayoría de los países?", 
  opciones: ["0.08%", "0.15%", "0.02%"], 
  correcta: "0.08%" 
},
{ 
  pregunta: "¿Qué debes hacer si has consumido alcohol y necesitas desplazarte?", 
  opciones: ["Buscar transporte alternativo", "Manejar lentamente", "Esperar 30 minutos antes de conducir"], 
  correcta: "Buscar transporte alternativo" 
},
{ 
  pregunta: "¿Qué tipo de sanciones puedes enfrentar por manejar bajo los efectos del alcohol?", 
  opciones: ["Multas, cárcel, y pérdida de la licencia", "Advertencia verbal", "Sin sanciones"], 
  correcta: "Multas, cárcel, y pérdida de la licencia" 
},
{ 
},
    // Agrega más preguntas aquí...
  ];
  
  function barajarPreguntas() {
    return preguntas.sort(() => Math.random() - 0.5);
  }
  
  function mostrarPreguntas() {
    const contenedor = document.getElementById("questionContainer");
    contenedor.innerHTML = "";
    const preguntasAleatorias = barajarPreguntas();
    
    preguntasAleatorias.forEach((pregunta, index) => {
      const divPregunta = document.createElement("div");
      divPregunta.classList.add("question");
      
      const preguntaTexto = document.createElement("p");
      preguntaTexto.innerText = `${index + 1}. ${pregunta.pregunta}`;
      divPregunta.appendChild(preguntaTexto);
  
      pregunta.opciones.forEach((opcion) => {
        const opcionLabel = document.createElement("label");
        const opcionInput = document.createElement("input");
        opcionInput.type = "radio";
        opcionInput.name = `pregunta${index}`;
        opcionInput.value = opcion;
  
        opcionLabel.appendChild(opcionInput);
        opcionLabel.append(` ${opcion}`);
        divPregunta.appendChild(opcionLabel);
        divPregunta.appendChild(document.createElement("br"));
      });
  
      contenedor.appendChild(divPregunta);
    });
  }
  
  function calcularResultados() {
    let puntaje = 0;
    preguntas.forEach((pregunta, index) => {
      const seleccion = document.querySelector(`input[name="pregunta${index}"]:checked`);
      if (seleccion && seleccion.value === pregunta.correcta) {
        puntaje++;
      }
    });
  
    const resultadoTexto = `Has obtenido ${puntaje} de ${preguntas.length} respuestas correctas.`;
    document.getElementById("result").innerText = resultadoTexto;
  
    const mensajeAprobacion = document.createElement("div");
    mensajeAprobacion.classList.add("result");
  
    if (puntaje >= 60) {
      mensajeAprobacion.innerText = "¡Felicidades, has aprobado la evaluación!";
      mensajeAprobacion.style.backgroundColor = "#28a745";
    } else {
      mensajeAprobacion.innerText = "Lo siento, no has aprobado. ¡Inténtalo de nuevo!";
      mensajeAprobacion.style.backgroundColor = "#dc3545";
    }
  
    document.getElementById("result").appendChild(mensajeAprobacion);
  }
  
  document.getElementById("verResultadosBtn").addEventListener("click", calcularResultados);
  document.addEventListener("DOMContentLoaded", mostrarPreguntas);
  