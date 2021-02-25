var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

function largestNumber (values){
    let aux = 0;
    for(let i = 0; i < values.length; i+=1){
        if(values[i] > aux) {
            aux = values[i];
        }
    }
    return aux;
}

console.log(largestNumber(myArray));

//console.log(Math.max(...myArray));