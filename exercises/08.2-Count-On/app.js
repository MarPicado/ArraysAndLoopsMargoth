//dado un arreglo
let myArray = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];
//inicializamos el array
let hello = [];
for (let index = 0; index < myArray.length; index++) {
  //preguntamos si el tipo de dato del elemento del arreglo es de tipo "object"
    if (typeof(myArray[index]) == 'object'){
      //adicionamos el elemento al arreglo
        hello.push(myArray[index])
    }
}
console.log(hello)

