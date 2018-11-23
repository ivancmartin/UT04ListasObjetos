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

    //tamaño actual del array
    this.listSize = function (){
        return array.length;
    }

    //si la lista está vacía
    this.isEmpty = function(){
        return (this.listSize() === 0);
    }

    //si la lista esta llena
    this.isFull = function(){
        return (array.length >= size  ? true : false );
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
    this.addAt = function(objPerson,index){
        
        //Eso no es un Objeto persona
        if(!(objPerson instanceof Person)){
            throw "Eso no es un Objeto persona";
        }
        //control sobre el indice: si esta fuera de rango o no es un numero  
        if((index < 0 || index > tam)){
            throw "Eso no es un indice válido (max " + tam + " )...";
        }
        //si la lista NO está llena
        if(!isFull(list)){
            //si está vacía se añade al principio
            if(isEmpty(list)){
                list.push(objPerson);
            }else if(!undefined(list[index])){
                list.splice(index, 0, objPerson);        
            }
        }else{
            throw "esto está lleno!";
        }
        return size(list);
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
    var per2 = new Person("beatriz","perez");
    var per3 = new Person(); //objeto vacío
    var per4 = new Person("ruben","martin");
    var per5 = new Person("maria","caballero");
    var per6 = new Person1("extra","extra");
   
    var list = new Lista();
    
    console.log(list.addPerson(per1));

    list.addPerson(per2);
    list.addPerson(per3);
    list.addPerson(per4);
    
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

    console.log("El tamaño actual de la lista es:" + list.listSize()); 

    console.log("¿La lista está vacía? " + list.isEmpty());
    console.log("¿La lista está llena? " + list.isFull());

    list.toStringArray();
	
}
window.onload = (testListObj);