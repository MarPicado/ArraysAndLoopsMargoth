var chunk_one = ['Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell'];
var chunk_two = ['Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for (let i = 0; i < chunk_one.length; i++) {
        newArray.push(firstArray[i]);
        for (let i = 0; i < chunk_two.length; i++) {
            newArray.push(secondArray[i]);
        }

    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));

//The length of the returned array should be equal to the sum of the length of first and second given arrays