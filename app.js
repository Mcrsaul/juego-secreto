let numeroSecreto = 0;
let intentos = 1;
//console.log(numeroSecreto);
let listaNumerosSorteados = [];
let numeroMaximo=10;
//esta funcion se encarga de modificar el texto mostrado en el sitio web para nuestro usuario
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;

}
 
 //esta funcion se encarga de limpiar la caja cuando perdemos
 function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
 }
 //esta funcion se encarga de generar un numero randon
 function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

     console.log(numeroGenerado);
     console.log(listaNumerosSorteados.length);
     if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
     }
     else{
     if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
     }
     else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
 }
 
 function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`indica un numero del 1 ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
 } 

 //esta funcion se encarga de reiniciar el juego cuando ganamos
 function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja ();
    //mostrar el mensaje del inicio
    //generar el numero aleatorio
    //reiniciar el contador
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

 }

 condicionesIniciales();

//esta funcion se encarga de realizar la logica del juego
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if(numeroUsuario==numeroSecreto){
        
        asignarTextoElemento('p', `acertaste en ${intentos} ${intentos==1? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else{
        //el usuario no acerto
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p', 'el numero secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
