"use strict";

var arrayP = [];

/* cosntructor de person */
var Person = {
    pname : "default-name",
    psurname : "default-surname",
    pfullname : function(){ return this.pname + " " + this.psurname} 
}

Object.defineProperty(Person,'pfullname',{
    writable: false,
    enumerable: false
});

//la variable objeto
var PersonConst = Object.create(Person);

PersonConst.pname = "ivan";
PersonConst.psurname = "cañizares";

arrayP.push(PersonConst);

var PersonConst = Object.create(Person);
PersonConst.pname = "beatriz";
PersonConst.psurname = "martin";

arrayP.push(PersonConst);

arrayP.forEach(function(valor,indice,arrayp){
    console.log(valor.pname +  " " + indice);
    
})



console.log(PersonConst.pname + " " + PersonConst.psurname );

//funciones de testeo
function testListObj(){
    	
}