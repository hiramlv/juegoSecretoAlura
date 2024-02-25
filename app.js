
//.........OPTIMIZACION...............................................
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el Número en sólo ${intentos} ${(intentos===1) ? 'vez' : 'veces'}!!`); //Operador Ternario que acorta el if y sabe en momento usar vez o veces
        document.getElementById('reiniciar').removeAttribute('disabled');  
    } else{ //Usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}
function limpiarcaja(){
    document.querySelector('#valorUsuario').value = '';    
}
function generarNumeroSecreto() { //Generamos numero aleatorio
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{    
    //Si el Num.gener aparece en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }}
}
function CondicionesIniciales(){
//Generalizamos para solo cambiar parametros en cada objeto
asignarTextoElemento('h1','JUego del numero secreto!');
asignarTextoElemento('p',`Indica un numero del 1 al${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto(); 
intentos = 1;
}
function reiniciarjuego(){
    //Limpiamos caja
    limpiarcaja();
    //Indicamos mensaje de inicio
    //Reiniciar numero de intentos
    //Generamos nuevo numero aleatorio
    CondicionesIniciales();
    //Deshabilitar boton "Nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}

CondicionesIniciales();
