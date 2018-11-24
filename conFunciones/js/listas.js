"use strict";

/*Objetos personas*/
function Person(name,surname){
    this.name = name || "default-name";
    this.surname = surname || "default-surname";
    //this.fullname = name + " " + surname; <-- corregir 
}

/* usado para comprobar las instancias(funciones de test) */
function Person1(name,surname){
    this.name = name || "default-name";
    this.surname = surname || "default-surname";
    //this.fullname = this.name + " " + this.surname; <-- corregir
}

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

        //si el elemento NO es un número
        if(!(objPerson instanceof Person)){
            throw "Eso no es un objeto persona.";
        }
        
        //si la lista está llena
        if(!this.isFull()){
            array.push(objPerson);
        }else{
            throw "esto está lleno!";
        }

        //devolvemos 
        return this.listSize(array);
    }
    
    //Añade a la lista un elemento de tipo Number y devuelve el tamaño actual del array
    this.addPersonAt = function(objPerson,index){
        
        //Eso no es un Objeto persona
        if(!(objPerson instanceof Person)){
            throw "Eso no es un Objeto persona";
        }
        //control sobre el indice: si esta fuera de rango 
        if((index < 0 || index > this.size)){
            throw "Eso no es un indice válido (max " + tam + " )...";
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
            throw "esto está lleno!";
        }
        return this.listSize(array);
    }

    // devuelve el elemento encontrado en el indice selecionado dentro del array
    this.getPerson = function(index){
        if(array.includes(array[index])){
            return array[index];
        }else{
            throw "El elemento no existe";
        }
    }

    //vacia una lista de elementos: pasa los valores a NaN
    this.clear = function(){
        return array.splice(array,size);
    }

    //devuelve el 1º elemento de un array
    this.firstElement = function(){
        var last;
        if(!this.isEmpty(array)){
            last = array[0];
        }else{
            throw "La lista está vacía";
        }
        return last;
    }

    //devuelve el último elemento de un array
    this.lastElement = function(){
        var last;
        if(!this.isEmpty(array)){
            last = array[this.listSize() - 1];
        }else{
            throw "La lista está vacía";
        }
        return last;
    }

    //elimina el indice del array y devuelve el valor borrado
    this.remove = function(index){

        index = index || 0;

        if(this.isEmpty(array)){    
            throw "La lista está vacía";
        }

        var range = this.listSize(array)-1;
        //console.log(range);
        if(index > range || index < 0){    
            throw "El indice es incorrecto: debe estar entre el 0 y " + range;
        }
        //guardamos el elemento que vamos a borrar
        var deleted = array[index];
        //borramos el elemento
        array.splice(index,1,);
        //devolvemos el elemento borrado
        return deleted;
    }

    //elimina el indice del array
    this.removeElement = function(elem){

        if(this.isEmpty(array)){    
            throw "La lista está vacía";
        }

        console.log("valor del elemento a borrar " + array.includes(elem));
        
        if(!array.includes(elem)){
            throw "el valor no esta en la lista";
        }
        //recogemos el valor del indice de la 1º coincidencia
        var index = array.indexOf(elem);
        //guardamos el elemento que vamos a borrar
        var deleted = array[index];
        //borramos el elemento
        array.splice(index,1,);
        //devolvemos el elemento borrado
        return deleted;
    }
    
    //sustituye el valor del indice, devuelve el valor sustituido
    this.set = function(elem,index){
        
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

    //muestra por pantalla los valores del array
    this.toStringArray = function(){
        for (var i = 0; i < this.listSize(); i++) {
            console.log(array[i].name);
        }
    }

        

    }




//funciones de testeo
function testListObj(){

    var per1 = new Person("ivan","cañizares");
    var per2 = new Person("beatriz","moraleda");
    var per3 = new Person(); //objeto vacío
    var per4 = new Person("ruben","martin");
    var per5 = new Person("maria","caballero");
    var per6 = new Person1("extra","extra");
   
    var list = new Lista();
    
    list.addPerson(per1)
    list.addPerson(per2);
    console.log(list.addPersonAt(per4,0));
    list.addPerson(per5);
    var PerAux = list.getPerson(0);
    console.log("Persona en la posición 0 del array: " + PerAux.name) ;
    //console.log(list.clear());

    var PerAux = list.firstElement();
    console.log("1º persona del array: " + PerAux.name);

    var PerAux = list.lastElement();
    console.log("última persona del array: " + PerAux.name);

    var PerAux = list.remove();
    console.log("Elemento borrado del array (posicion por defecto: 0): " + PerAux.name);

    var PerAux = list.removeElement(per1);
    console.log("Elemento borrado del array (posicion por defecto: 0): " + PerAux.name);

    /*
    try {
        list.addPerson(per6);//este debe lanzar la excepción: no es una instancia de "Persona" ya que es un objeto "Persona1")
    } catch (error) {
        console.log(error);
    }
    
    try {
        list.addPerson(per5); //debe lanzar la excepción: la lista esta completa.
    } catch (error) {
        console.log(error);
    }
    */

    console.log("El tamaño actual de la lista es:" + list.listSize()); 

    console.log("¿La lista está vacía? " + list.isEmpty());
    console.log("¿La lista está llena? " + list.isFull());

    list.toStringArray();
	
}
window.onload = (testListObj);