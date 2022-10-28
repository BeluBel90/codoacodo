
const form = document.querySelector('#ticket-form');

 form.addEventListener ('submit', event => { 
     event.preventDefault();

     const select = document.querySelector('#categoria');
     const cant = document.querySelector('#cantidad');
     var suma;
     
     if(select.value == 1){
         suma = (200*0.2)*cant.value;
     }else if ( select.value == 2){
         suma = (200*0.5)*cant.value;
     }else {
         suma = (200*0.85)*cant.value;
     }


     const alert = document.querySelector('#alert');
     alert.textContent = 'Total a pagar: $ ' + suma;

 })


function limpiar(){
    document.querySelector('#ticket-form').reset();
    const alert = document.querySelector('#alert');
    alert.textContent = 'Total a pagar: $ ';
    
}

