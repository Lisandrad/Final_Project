function prestaciones() {
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault() //investigar mas sobre esta funcion...

    let nombre = document.getElementById("nombre").value;
    let cedula = document.getElementById("cedula").value;
    let salario = document.getElementById("salario").value;
    let salarioDiario = salario / 23.83;
    console.log(salarioDiario);

    let dateEnt = document.getElementById("fechaEnt").value;
    let dateSal = document.getElementById("fechaSal").value;

    let diferenciaMeses = calcularDiferenciaMeses(dateEnt, dateSal);
    
    let preAviso = document.getElementById("avisoSi");
    let resultadoPreAviso = 0
    if (preAviso.checked) {
      console.log("Esta marcado");
    } else {
      resultadoPreAviso = calcularPreAviso(salarioDiario, diferenciaMeses);
    }     
    console.log("resultadoPreAviso: ",resultadoPreAviso)

    let cesantia = document.getElementById("cesantiaSi");
    let resultadoCesantia = 0;
    if (cesantia.checked) {
      resultadoCesantia = calcularCesantia(salarioDiario, diferenciaMeses);
    } else {
      console.log("No esta marcado");
    }
    
    
    console.log("resultadoCesantia: ",resultadoCesantia)

    let vacaciones = document.getElementById("vacacionesSi");
    let resultadoVacaciones = 0; 
    if (vacaciones.checked) {
      console.log("Esta marcado");
    } else {
      resultadoVacaciones = calculoDeVacaciones(salarioDiario, diferenciaMeses);
    }
    
    
    console.log("resultadoVacaciones: ",resultadoVacaciones)
    let resultadoNavidad = 0;
    let navidad = document.getElementById("salNavidadSi");

    if (navidad.checked) {
      resultadoNavidad = calculoDeSalarioNavidad(salario, dateSal);
    } else {
      console.log("No esta marcado");
    }
    
    
    console.log("resultadoNavidad: ",resultadoNavidad)

    let totalaPagar = resultadoPreAviso + resultadoCesantia + resultadoVacaciones + resultadoNavidad;
    console.log(totalaPagar);
    setearTotal(Math.round(totalaPagar));
  }); 
}

function calcularDiferenciaMeses (dateEnt, dateSal) {
  let fechaEnt = new Date(dateEnt);
  let fechaSal = new Date(dateSal);

  var diffYears = fechaSal.getFullYear() - fechaEnt.getFullYear();
  var diffMonths = fechaSal.getMonth() - fechaEnt.getMonth();

  var hasToRest = diffYears > 0 && diffMonths < 0 ? 1 : 0;
  diffYears-=hasToRest;
  diffMonths = diffMonths < 0 ? 12 - Math.abs(diffMonths) : diffMonths;
  
  return (diffYears * 12) + diffMonths;
  
}

 function calcularPreAviso (salarioDiario, mesesTrabajados) {
  let resultado;   
  if(mesesTrabajados >= 3 && mesesTrabajados <= 6 ) {
      resultado = salarioDiario * 7;
    }     
    else if(mesesTrabajados > 6 && mesesTrabajados <= 12 ) {
      resultado = salarioDiario * 14;
    }     
    else if(mesesTrabajados > 12) {
      resultado = salarioDiario * 28;
    }     

    return resultado;
 }

  function calcularCesantia(salarioDiario, mesesTrabajados) {
    let anoTrabajados = parseInt(mesesTrabajados / 12);
    let mesesRestante = ((mesesTrabajados/12) - anoTrabajados)*12;
    
    
    let resultado=0;
    resultado += calculoCesantiaDiv(salarioDiario, (anoTrabajados *12));
    resultado += calculoCesantiaDiv(salarioDiario, mesesRestante);
     return resultado;
  }

function calculoCesantiaDiv(salarioDiario, mesesTrabajados) {
  let resultado;
  let añosTrabajados =  parseInt(mesesTrabajados / 12);
  if (mesesTrabajados <=3){
    resultado = 0;
    alert("No apto para Auxilio de Cesantia");
  }
  else if(mesesTrabajados > 3 && mesesTrabajados <= 6 ) {
    resultado = salarioDiario * 6;
  } 
  else if(mesesTrabajados > 6 && mesesTrabajados <= 12 ) {
  resultado = salarioDiario * 13;
  } 
  else if(mesesTrabajados > 12 && mesesTrabajados <= 60 ) {
    resultado = (añosTrabajados * 21) * salarioDiario;
  } 
  else if(mesesTrabajados > 60) {
    resultado = (añosTrabajados * 23) * salarioDiario;
  }

   return resultado;
}

 function calculoDeVacaciones(salarioDiario, mesesTrabajados) {
    let resultado;
    if(mesesTrabajados >= 5 && mesesTrabajados <6){
      resultado = salarioDiario * 6;
    }
    else if(mesesTrabajados >= 6 && mesesTrabajados < 7 ) {
      resultado = salarioDiario * 7;
    }
    else if(mesesTrabajados >= 7 && mesesTrabajados < 8 ) {
      resultado = salarioDiario * 8;
    }
    else if(mesesTrabajados >= 8 && mesesTrabajados < 9 ) {
      resultado = salarioDiario * 9;
    }
    else if(mesesTrabajados >= 9 && mesesTrabajados < 10 ) {
      resultado = salarioDiario * 10;
    }
    else if(mesesTrabajados >= 10 && mesesTrabajados < 11 ) {
      resultado = salarioDiario * 11;
    }
    else if(mesesTrabajados >= 11 && mesesTrabajados < 12 ) {
      resultado = salarioDiario * 12;
    }
    else if(mesesTrabajados >= 12 && mesesTrabajados <= 60 ) {
      resultado = salarioDiario * 14;
    }
    else if(mesesTrabajados >60  ) {
      resultado = salarioDiario * 18;
    }
    return resultado;
  }

function calculoDeSalarioNavidad (salario, fechaSal) {
 let resultadoSalarioNavidad;

 let anoencurso = new Date(fechaSal).getFullYear(); 
 let reciduoDias= new Date(fechaSal).getDate();
 var s = (salario/23.83)*reciduoDias;
 let mesesTrabajados = calcularDiferenciaMeses("01/01/"+ anoencurso, fechaSal);
 
 var salariodevengado = (salario * mesesTrabajados) + s;
 resultadoSalarioNavidad = (salariodevengado / 12);
  return resultadoSalarioNavidad;

}


function setearTotal(totalaPagar) {
  document.getElementById("resultado").innerHTML = "RD$"+ totalaPagar;

}

prestaciones();

