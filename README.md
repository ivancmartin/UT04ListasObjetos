# UT04ListasObjetos
UT04 Práctica Listas y Listas Ordenadas con objetos

#0.1.0
listas -> Objetos principales: 
    - Person.
        + name
        + surname
        + fullName() 
    - Person1 (utilizado para realizar pruebas con instance of).
        + name
        + surname
        + fullName() 
    - Lista (un array interno para almacenar objetos de tipo Person).
        + isFull: devuelve si esta lleno o no el array.
        + isEmpty: devuelve si esta vacío o no el array.
        + listSize: devuelve tamaño de nuestro array según se va llenando.
        + addPerson: añade un objeto Person Al final del array(interno).
        + addPersonAt: añade un objeto Person Al final del array(interno) en la posición indicada.
        + getPerson: devuelve el objeto Person indicado.
        + clear: vacía el array.
        + firstElement: devuelve el 1º objeto del array.
        + lastElement devuelve el último elemento del array.
        + remove: elimina el objeto del indice seleccionado.
        + removeElement: borra un objeto concreto del array.
        + set: sustituye un objeto por otro indicado.
        + toStringArray: muestra por pantalla los valores de los objetos almacenados en el array.
    - myError (objeto para definir formatos propios de errores).
        + noneInstanceOf(myError) : el objeto no es una isntancia de Person:
        + notFound(myError) : elemento no encontrado.
        + fullOf(myError): array lleno.
        + emptyOf(myError): array vacío.
        + outOfIndex(myError): indice fuera de rango.
        + incorrectIndex(myError): indice introducido incorrecto.
    - testListObj: testeo de las funciones del objeto Lista.

#0.1.1
listasOrdenadas -> Objetos principales: 
    - Person.
        + name
        + surname
        + fullName() 
    - Person1 (utilizado para realizar pruebas con instance of).
        + name
        + surname
        + fullName() 
    - Lista (un array interno para almacenar objetos de tipo Person).
        + isFull: devuelve si esta lleno o no el array.
        + isEmpty: devuelve si esta vacío o no el array.
        + listSize: devuelve tamaño de nuestro array según se va llenando.
        + addPerson: añade un objeto Person de forma ordenada por el atributo surname del objeto.
        + getPerson: devuelve el objeto Person indicado.
        + clear: vacía el array.
        + firstElement: devuelve el 1º objeto del array.
        + lastElement devuelve el último elemento del array.
        + remove: elimina el objeto del indice seleccionado.
        + removeElement: borra un objeto concreto del array.
        + toStringArray: muestra por pantalla los valores de los objetos almacenados en el array.
    - myError (objeto para definir formatos propios de errores).
        + noneInstanceOf(myError) : el objeto no es una isntancia de Person:
        + notFound(myError) : elemento no encontrado.
        + fullOf(myError): array lleno.
        + emptyOf(myError): array vacío.
        + outOfIndex(myError): indice fuera de rango.
        + incorrectIndex(myError): indice introducido incorrecto.
    - testListObj: testeo de las funciones del objeto Lista.
