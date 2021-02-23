function sumTheElements(theArray) {

    var total = 0;

    //your code here
    for (let i = 0; i < theArray.length; i = i + 1) {
        total = total + theArray[i];
    }

    return total;
}
let returnValue = sumTheElements([2,13,34,5]);
console.log(returnValue);