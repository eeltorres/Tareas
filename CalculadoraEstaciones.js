var num_mes = prompt("Ingrese un numero de un mes");

if(num_mes > 0 && num_mes < 13){
  if(num_mes == 12 || num_mes == 1 || num_mes == 2 ){
      console.log("Su estacion es Invierno");
    }
  else if(num_mes == 3 || num_mes == 4 || num_mes == 5){
      console.log("Su estacion es Primavera");
  }
  else if(num_mes == 6 || num_mes == 7 || num_mes == 8){
      console.log("Su estacion es Verano");
  }
  else
  {
    console.log("Su estacion es Otoño");
  }
}else{
  alert("Valor ingresado invalido");
}
alert("Nombre: Eduardo Eleazar Lemus Torres || Carne: 23002910");
