"use strict";

/*Objetos personas*/
function Person(name,surname){
    this.name = name || "default-name";
    this.surname = surname || "default-surname";
    this.fullname = this.name + " " + this.surname; 
}

function Person1(name,surname){
    this.name = name || "default-name";
    this.surname = surname || "default-surname";
    this.fullname = this.name + " " + this.surname; 
}

function Lista (){
    var array = []; 
    const size = 5;

    this.isEmpty = function(){
        return (array.length === 0);
    }

    this.isFull = function(){
        return (array.length > size  ? true : false );
    }

    this.listSize = function (){
        return array.length;
    }

    this.addPerson = function(objPerson){
        
        
        //si el elemento NO es un número
        if(objPerson instanceof Person){
            throw "Eso no es un número.";
        }
        //si la lista está llena
        if(!isFull()){
            array.push(objPerson);
        }else{
            throw "esto está lleno!";
        }
        return size(list);

    }
    
    this.getArray = function(){
        for (var i = 0; i < array.length; i++) {
            console.log(array[i].name);
        }
    }
    
    
}


//funciones de testeo
function testListObj(){

    var per1 = new Person("ivan","cañizares");
    var per2 = new Person("beatriz","perez");
    var per3 = new Person();
    var per4 = new Person("ruben","martin");
    var per5 = new Person("maria","caballero");
    var per2 = new Person1("extra","extra");

   
    var list = new Lista();
    list.addPerson(per1);
    list.addPerson(per1);
    list.addPerson(per1);
    list.addPerson(per1);
    list.addPerson(per1);
    list.addPerson(per1);

    console.log(list.listSize());


    console.log(list.isEmpty());
    console.log(list.isFull());
    var miArray =  list.getArray();
	
}
window.onload = (testListObj);