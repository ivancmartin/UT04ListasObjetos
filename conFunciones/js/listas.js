"use strict";

/*Objetos Person, Person1*/
function Person(name,surname){
    this.name = name || "default-name";
    this.surname = surname || "default-surname";
    this.fullname = function(){
        return this.name + " " + this.surname;
    }
}

/*Objeto person1: usado para comprobar las instancias(funciones de test) */
function Person1(name,surname){
    this.name = name || "default-name";
    this.surname = surname || "default-surname";
    this.fullname = function(){
        return this.name + " " + this.surname;
    }
}


Object.defineProperty
/* fin objetos Person, Person1 */

/* objeto Lista */
function Lista (){

    var array = []; 
    const size = 5;

    //si la lista está vacía
    this.isEmpty = function(){
        return (this.listSize() === 0);
    }

    //si la lista esta llena
    this.isFull = function(){
        return (array.length >= size  ? true : false );
    }

    //tamaño actual del array
    this.listSize = function (){
        return array.length;
    }

    //añade un objeto de tipo Persona fuera
    this.addPerson = function(objPerson){

        //si el elemento NO es un objeto de tipo Person
        if(!(objPerson instanceof Person)){
           // throw "Eso no es un objeto persona.";
           throw new noneInstanceOf();
        }
        
        //si la lista está llena
        if(!this.isFull()){
            array.push(objPerson);
        }else{
            throw new fullOf();
        }

        //devolvemos 
        return this.listSize(array);
    }
    
    //Añade a la lista un elemento de tipo Number y devuelve el tamaño actual del array
    this.addPersonAt = function(objPerson,index){
        
        index = index || 0;

        if(isNaN(index)){
            throw new incorrectIndex(index);
        }

        //si el elemento NO es un objeto de tipo Person
        if(!(objPerson instanceof Person)){
            // throw "Eso no es un objeto persona.";
            throw new noneInstanceOf();
        }

        //control sobre el indice: si esta fuera de rango 
        var range = this.listSize(array)-1;
        if((index < 0 || index > range)){
            throw new outOfIndex(range);
        }

        //si la lista NO está llena
        if(!this.isFull()){
            
            //si está vacía se añade al principio
            if(this.isEmpty()){
                array.push(objPerson);
            }else if( (array[index]) instanceof Person ){
                array.splice(index, 0, objPerson);        
            }

        }else{
            throw new fullOf();
        }
        return this.listSize(array);
    }

    // devuelve el elemento encontrado en el indice selecionado dentro del array
    this.getPerson = function(index){
        index = index || 0; 

        if(isNaN(index)){
            throw new incorrectIndex(index);
        }

        //control sobre el indice: si esta fuera de rango 
        var range = this.listSize(array)-1;
        if((index < 0 || index > range)){
            throw new outOfIndex(range);
        }else{
            return array[index];
        }
        
    }

    //vacia una lista de elementos
    this.clear = function(){
       array.splice(array,this.listSize(array));
       return this.listSize(array);
    }

    //devuelve el 1º elemento de un array
    this.firstElement = function(){
        var last;
        if(!this.isEmpty(array)){
            last = array[0];
        }else{
            throw new emptyOf();
        }
        return last;
    }

    //devuelve el último elemento de un array
    this.lastElement = function(){
        var last;
        if(!this.isEmpty(array)){
            last = array[this.listSize() - 1];
        }else{
            throw new emptyOf();
        }
        return last;
    }

    //elimina el indice del array y devuelve el valor borrado
    this.remove = function(index){

        index = index || 0;

        if(isNaN(index)){
            throw new incorrectIndex(index);
        }

        if(this.isEmpty(array)){    
            throw new emptyOf();
        }

        var range = this.listSize(array)-1;
        //console.log(range);
        if(index > range || index < 0){    
            throw new outOfIndex(range);
        }
        //guardamos el elemento que vamos a borrar
        var deleted = array[index];
        //borramos el elemento
        array.splice(index,1,);
        //devolvemos el elemento borrado
        return deleted;
    }

    //elimina el indice del array
    this.removeElement = function(objPerson){

        if(this.isEmpty(array)){    
            throw new emptyOf();
        }

        //console.log("valor del elemento a borrar " + array.includes(objPerson));
        
        if(!array.includes(objPerson)){
            throw new notFound();
        }
        
        //recogemos el valor del indice de la 1º coincidencia
        var index = array.indexOf(objPerson);
        //guardamos el elemento que vamos a borrar
        var deleted = array[index];
        //borramos el elemento
        array.splice(index,1,);
        //devolvemos el elemento borrado
        return deleted;
    }
    
    //sustituye el valor del indice, devuelve el valor sustituido
    this.set = function(objPerson,index){
        
        index = index || 0;

        if(isNaN(index)){
            throw new incorrectIndex(index);
        }

        if(this.isEmpty(array)){    
            throw new emptyOf();
        }

        //si el elemento NO es un número
        if(!(objPerson instanceof Person)){
            throw new noneInstanceOf();
        }

        var range = this.listSize(array)-1;
        
        if(index > range || index < 0){    
            throw new outOfIndex(range);
        }

        var replace = array[index]
        
        array.splice(index,1,objPerson);
        
        return replace;
    }
    
    //muestra por pantalla los valores del array
    this.toStringArray = function(){
        var string = "";
        if(this.isEmpty(array)){    
            string = "Lista vacía";
        }else{
            for (var i = 0; i < this.listSize()-1; i++) {
                string += array[i].fullname() + " - ";
            }
            string += array[i].fullname();
        }
        
        return string;
    }
}
/* fin objeto lista*/

/* objeto myError */
function myError (){}; //objeto vacío
myError.prototype = new Error(); //heredamos del objeto error
myError.prototype.constructor = myError(); // creamos un constructor para myError
myError.prototype.toString = function(){ //sobreescribimos el metodo toString para nuestro objeto
    return  this.name  + " : " + this.message;
};

// tipo de error personalizado: el objeto no es una isntancia de Person
function noneInstanceOf(){ 
    this.name = "noneInstanceOf";
    this.message = "Este objeto no es una instancia de Person";
}

noneInstanceOf.prototype = new myError(); //hereda de myError
noneInstanceOf.prototype.constructor = noneInstanceOf; // creamos un constructor para este tipo de error

// tipo de error personalizado: elemento no encontrado
function notFound(){ 
    this.name = "notFound";
    this.message = "Este objeto no se encuentra en el array";
}

notFound.prototype = new myError(); //hereda de myError
notFound.prototype.constructor = notFound; // creamos un constructor para este tipo de error

// tipo de error personalizado: array lleno
function fullOf(){ 
    this.name = "fullOf";
    this.message = "El array está completo";
}

fullOf.prototype = new myError(); //hereda de myError
fullOf.prototype.constructor = fullOf; // creamos un constructor para este tipo de error

// tipo de error personalizado: array lleno
function emptyOf(){ 
    this.name = "emptyOf";
    this.message = "El array está vacío";
}

emptyOf.prototype = new myError(); //hereda de myError
emptyOf.prototype.constructor = emptyOf; // creamos un constructor para este tipo de error


// tipo de error personalizado: el indice se sale del rango
function outOfIndex(range){ 
    this.name = "outOfIndex";
    this.message = "El indice es incorrecto: debe estar entre el 0 y " + range;
}

outOfIndex.prototype = new myError(); //hereda de myError
outOfIndex.prototype.constructor = outOfIndex; // creamos un constructor para este tipo de error

// tipo de error personalizado: el indice introducido es incorrecto
function incorrectIndex(index){ 
    this.name = "incorrectIndex";
    this.message = "El indice " +  index + "   es incorrecto: debe ser un numero";
}

incorrectIndex.prototype = new myError(); //hereda de myError
incorrectIndex.prototype.constructor = incorrectIndex; // creamos un constructor para este tipo de error


/* fin objeto myError */
var myList = new Lista();
function mainPerson(name,surname,opc){
    
    var per1 = new Person(name,surname);

    console.log(per1.fullname(),opc);

    var error = document.getElementById("error");
    var info = document.getElementById("info");

    //1 añadir / 2 borrar
    if (opc === 1) {
        try {
            console.log("persona añadida; Tamaño actual del array:" + myList.addPerson(per1));
            error.innerHTML = "";
        } catch (exception) {
            error.innerHTML = exception;
        }
    }else{
        try {
            var PerAux = myList.remove();
            console.log("Elemento borrado del array (posicion por defecto: 0): " + PerAux.name);
            error.innerHTML = "";
        } catch (exception) {
            error.innerHTML = exception;
        }
    }
    
    console.log("lista actual:");
    myList.toStringArray();

    info.innerHTML = myList.toStringArray(); 
   
}


//funciones de testeo
function testListObj(){

    var per1 = new Person("1 - ivan","cañizares");
    var per2 = new Person("2 - beatriz","moraleda");
    var per3 = new Person(); 
    var per4 = new Person("4 - ruben","martin");
    var per5 = new Person("5 - maria","caballero");
    var per6 = new Person1("6 - extra","extra");
   
    var list = new Lista();
    console.log("Comprobaciones antes de instertar objetos en un array");
    console.log("¿La lista está vacía? " + list.isEmpty());
    console.log("¿La lista está llena? " + list.isFull());
    
    console.log("Añadiendo personas al array");
    console.log("persona añadida; Tamaño actual del array:" + list.addPerson(per1));
    console.log("persona añadida; Tamaño actual del array:" + list.addPerson(per2));
    console.log("persona añadida; Tamaño actual del array:" + list.addPerson(per3));
    console.log("persona añadida; Tamaño actual del array:" + list.addPerson(per4));
    console.log("persona añadida; Tamaño actual del array:" + list.addPerson(per5));
   
    
    console.log("Comprobaciones despues de instertar objetos en un array");
    console.log("¿La lista está vacía? " + list.isEmpty());
    console.log("¿La lista está llena? " + list.isFull());
    
    console.log("lista actual:");
    var listaConsola = list.toStringArray();
    console.log(listaConsola);

    //error al añadir un elemento al array cuando este está lleno
    console.log("Intento añadir un elemento al array cuando este está lleno");
    try {
        console.log(list.addPerson(per5));
    } catch (error) {
        console.log(error.toString());
    }
    
    //error al añadir un objeto que no es una instancia de Person
    console.log("Intento añadir un objeto que no es una instancia de Person");
    try {
        console.log(list.addPerson(per6));
    } catch (error) {
        console.log(error.toString());
    }

    var PerAux = list.getPerson(2);
    console.log("Persona en la posición 2 del array: " + PerAux.name) ;
    
    //error al  recoger un objeto que esta fuera del rango del indice
    console.log("Intento recoger un objeto que esta fuera del rango(9) ");
    try {
        console.log(list.getPerson(9));
    } catch (error) {
        console.log(error.toString());
    }

    var PerAux = list.firstElement();
    console.log("1º persona del array: " + PerAux.name);

    var PerAux = list.lastElement();
    console.log("última persona del array: " + PerAux.name);

    //error al introducir un caracter como indice al borrar un elemento
    console.log("Intento introducir un caracter como indice al borrar un elemento (\"letras\")");
    try {
        var PerAux = list.remove("letras");
        console.log("Elemento borrado del array al (el valor del indice es 0 al no pasarle ningun parametro): " + PerAux.name);
    } catch (error) {
        console.log(error.toString());
    }

    var PerAux = list.remove();
    console.log("Elemento borrado del array (el valor del indice es 0 al no pasarle ningun parametro): " + PerAux.name);

    console.log("lista actual:");
    var listaConsola = list.toStringArray();
    console.log(listaConsola);

    var PerAux = list.remove(1);
    console.log("Elemento borrado del array (1): " + PerAux.name);

    console.log("lista actual:");
    var listaConsola = list.toStringArray();
    console.log(listaConsola);

    //error al intentar borrar un objeto que no se encuentra en el array
    console.log("Intento borrar un objeto que no está en el array");
    try {
        var PerAux = list.removeElement(per1);
        console.log("Elemento borrado del array (posicion por defecto: 0): " + PerAux.name);
    } catch (error) {
        console.log(error.toString());
    }

    console.log("lista actual:");
    var listaConsola = list.toStringArray();
    console.log(listaConsola);

    var PerAux = list.set(per1);
    console.log("Elemento borrado del array (posicion por defecto: 0): " + PerAux.name);

    console.log("lista actual:");
    var listaConsola = list.toStringArray();
    console.log(listaConsola);

    //error al intentar introducir un objeto fuera de rango
    console.log("Intento introducir un objeto fuera de rango (10)");
    try {
        list.addPersonAt(per1,10); //debe lanzar la excepción: fuera de rango.
    } catch (error) {
        console.log(error.toString());
    }

    console.log("lista actual:");
    var listaConsola = list.toStringArray();
    console.log(listaConsola);

    console.log("añado per2 en la posicion 0");
    list.addPersonAt(per2,0); 

    console.log("lista actual:");
    var listaConsola = list.toStringArray();
    console.log(listaConsola);

    console.log("El tamaño actual de la lista es:" + list.listSize()); 

    console.log("¿La lista está vacía? " + list.isEmpty());
    console.log("¿La lista está llena? " + list.isFull());

    console.log("vacío la lista")
    console.log(list.clear());

    console.log("lista actual:");
    var listaConsola = list.toStringArray();
    console.log(listaConsola);

    //error al intentar borrar un objeto cuando el array está vacío
    console.log("Intento borrar un objeto cuando el array está vacío");
    try {
        var PerAux = list.remove(0);
        } catch (error) {
        console.log(error.toString());
    }

}
window.onload = (testListObj);