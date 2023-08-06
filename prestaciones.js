function prestaciones() {
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault() //investigar mas sobre esta funcion...

    let nombre = document.getElementById("nombre").value;
    let cedula = document.getElementById("cedula").value;
    let salario = document.getElementById("salario").value;

    let dateEnt = document.getElementById("fechaEnt").value;
    let dateSal = document.getElementById("fechaSal").value;

    let diferenciaDias = fecha(dateEnt, dateSal);
    // console.log(diferenciaDias);
    
    let preAviso = document.getElementById("avisoSi");
    if (preAviso.checked) {
      console.log("Esta marcado");
    } else {
      console.log("No esta marcado");
    }

    let cesantia = document.getElementById("cesantiaSi");
    if (cesantia.checked) {
      console.log("Esta marcado");
    } else {
      console.log("No esta marcado");
    }

    let vacaciones = document.getElementById("vacacionesSi");
    if (vacaciones.checked) {
      console.log("Esta marcado");
    } else {
      console.log("No esta marcado");
    }

    let navidad = document.getElementById("salNavidadSi");
    if (navidad.checked) {
      console.log("Esta marcado");
    } else {
      console.log("No esta marcado");
    }
   




  });

   
}
prestaciones();



function fecha (dateEnt, dateSal) {
  let fechaEnt = new Date(dateEnt);
  let fechaSal = new Date(dateSal);

  let diferentDate = fechaSal - fechaEnt;
  var diferenciaDias = diferentDate / (1000 * 60 * 60 * 24);
  
  return diferenciaDias;
 }
