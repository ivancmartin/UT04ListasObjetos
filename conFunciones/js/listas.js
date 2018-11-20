"use strict";
//máximo de lementos de un array
var MAX_ELEMENT_LIST = 5;
// array 
var elemntList = create(); 
// crea un array con un valor máximo
function create(){
    var list = [];
    return list;
}
//Comprobar si el array está vacío: devuelve false si NO lo está; true si lo está.
function isEmpty(list){
    return (size(list) === 0);
}
//Comprobar si el array está lleno: devuelve false si NO lo está; true si lo está.
function isFull(list){
    return (size(list) === MAX_ELEMENT_LIST);
}
//Devuelve el tamaño de un array
function size(list){
    return list.length;
}
//añade a la lista un elemento de tipo Number y devuelve el tamaño actual del array
function add(list,elem){
    var tam = size(list);
    elem = parseInt(elem);
    //si el elemento NO es un número
    if(isNaN(elem)){
        throw "Eso no es un número.";
    }
    //si la lista está llena
    if(!isFull(list)){
        list.push(elem);
    }else{
        throw "esto está lleno!";
    }
    return size(list);
}
//Añade a la lista un elemento de tipo Number y devuelve el tamaño actual del array
function addAt(list,elem,index){
    //recogemos el tamaño actual del array
    var tam = capacity(list);
    //pasamos a entero
    elem = parseInt(elem);
    //si el elemento NO es un número
    if(isNaN(elem)){
        throw "Eso no es un número";
    }
    //control sobre el indice: si esta fuera de rango o no es un numero  
    if(isNaN(index) || (index < 0 || index > tam)){
        throw "Eso no es un indice válido (max " + tam + " )...";
    }
    //si la lista NO está llena
    if(!isFull(list)){
        //si está vacía se añade al principio
        if(isEmpty(list)){
            list.push(elem);
        }else if(!isNaN(list[index])){
            list.splice(index, 0, elem);        
        }
    }else{
        throw "esto está lleno!";
    }
    return size(list);
}
// devuelve el elemento encontrado en el indice selecionado dentro del array
function get(list,index){
    if(list.includes(list[index])){
        return list[index];
    }else{
        throw "El elemento no existe";
    }
}
//devuelve una cadena con la lista en texto formateado
function toString(list){
    var string = "";
    if (!isEmpty(list)) {
        for (var i = 0; i < size(list)-1; i++) {
            string = string + list[i] + " - ";
        }
        string = string + list[i];    
    }else{
        string = "Lista vacía";
    }
    return string;
}
//total de elementos que se pueden introducir en el array
function capacity(list){
    return MAX_ELEMENT_LIST;
}
//vacia una lista de elementos: pasa los valores a NaN
function clear(list){
    return list.splice(list,size(list));
}
//devuelve el 1º elemento de un array
function firstElement(list){
    var last;
    if(!isEmpty(list)){
        last = list[0];
    }else{
        throw "La lista está vacía";
    }
    return last;
}
//devuelve el último elemento de un array
function lastElement(list){
    var last;
    if(!isEmpty(list)){
        last = list[size(list) - 1];
    }else{
        throw "La lista está vacía";
    }
    return last;
}
//elimina el indice del array y devuelve el valor borrado
function remove(list,index){

    if(isEmpty(list)){    
        throw "La lista está vacía";
    }

    var range = size(list)-1;
    //console.log(range);
    if(index > range || index < 0){    
        throw "El indice es incorrecto: debe estar entre el 0 y " + range;
    }
    //guardamos el elemento que vamos a borrar
    var deleted = list[index];
    //borramos el elemento
    list.splice(index,1,);
    //devolvemos el elemento borrado
    return deleted;
}
//elimina el indice del array
function removeElement(list,elem){
    elem = parseInt(elem);
    if(isEmpty(list)){    
        throw "La lista está vacía";
    }
    console.log("valor del elemento a borrar " + list.includes(elem));
    if(!list.includes(elem)){
        throw "el valor no esta en la lista";
    }
    //recogemos el valor del indice de la 1º coincidencia
    var index = list.indexOf(elem);
    //guardamos el elemento que vamos a borrar
    var deleted = list[index];
    //borramos el elemento
    list.splice(index,1,);
    //devolvemos el elemento borrado
    return deleted;
}
//sustituye el valor del indice, devuelve el valor sustituido
function set(list,elem,index){
    
    if(isEmpty(list)){    
        throw "La lista está vacía";
    }
    
    var range = size(list)-1;
    
    if(index > range || index < 0){    
        throw "El indice es incorrecto: debe estar entre el 0 y " + range;
    }

    var replace = list[index]
    
    list.splice(index,1,elem);
    
    return replace;
}

// función principal: añadir un elemento
function addElem(elem,index){
    index = parseInt(index);
    var error = document.getElementById("error");
    var info = document.getElementById("info");
    error.innerHTML = ("");
    try {
        // si se introduce un index de tipo Number
        if(isNaN(index)){
            add(elemntList,elem);    
        }else{
            addAt(elemntList,elem,index);
        }
    } catch (exception) {
        error.innerHTML = exception;
    }
    info.innerHTML = toString(elemntList); 
}

// función principal: eliminar un elemento
function rmvElem(elem,index){
    index = parseInt(index);
    var error = document.getElementById("error");
    var info = document.getElementById("info");
    error.innerHTML = ("");
    try {
        // si se introduce un index de tipo Number
        if(isNaN(index)){
            removeElement(elemntList,elem);    
        }else{
            remove(elemntList,index);
        }
    } catch (exception) {
        error.innerHTML = exception;
    }
    info.innerHTML = toString(elemntList); 
}

//funciones de testeo
function testList(){
    var list = create(); 	
 	var list=[]; 	
 	console.log ("Capacidad: " + capacity(list));
 	console.log("Está vacía: " + isEmpty(list));
 	console.log("Longitud: " + size(list));

 	try {
	 	for (var i = 0 ; i < MAX_ELEMENT_LIST; i++){
            var num = (i*10);
            console.log("Nº de elementos: " + add(list,num));
	 	}
	 	add(list,i);//excepción al añadir un elemento fuera de rango
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("La lista completa: " + toString(list));	 	
 	console.log ("1º elemento: " + firstElement(list));
 	console.log ("último elemento: " + lastElement(list));

 	try {
	 	while (true){ 
	 		console.log ("Elemento borrado del indice 1: " + remove(list,0));
            console.log ("Estado de la lista actual: " + toString(list)); 
            console.log ("Eliminamos un valor concreto(si aparece en el array): 10");  
            console.log ("Resultado: " + removeElement(list,10));
            console.log ("Estado de la lista actual: " + toString(list));
            console.log ("añadimos un valor sustituyendo a otro: valor sustituido: " + set(list,25,2));
            console.log ("Estado de la lista actual: " + toString(list));
            console.log ("¿Qué valor hay en el aposición 1? el valor es: " + get(list,1))
            console.log ("Añadimos un elemento (35). Tamaño actual de la lista: " + add(list,35));
            console.log ("Estado de la lista actual: " + toString(list));
            console.log ("Borramos el elemento de un indice concreto, el 0 en este caso: " + remove(list,0));
            console.log ("Estado de la lista actual: " + toString(list));
        }
 	} catch (err) {
 		console.log(err); 
    }
    console.log ("borramos la lista");
    clear(list);
    console.log ("Estado de la lista actual: " + toString(list));  	 	
}
window.onload = (testList);