
let cant = parseInt(document.getElementById("cantidad").value);

 

 function select(){
    let option = parseInt(document.querySelector("categoria").value);
    return option;
}

function mostrar(){
    let alert = document.querySelector("alert").innerHTML = `$ ${suma}`;
}

let valor = select();
var suma; 
select();
    if (option =1) {
         suma= cant*(0.2*200);

  }else if(valor = 2){
          suma= cant*(0.5*200);
      }
      else{
          suma= cant*(0.15*200);
      }
      mostrar();
   



function limpiar(){
    document.getElementById('form').reset();
}

