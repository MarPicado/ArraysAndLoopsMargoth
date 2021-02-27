var people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak'];

function deletePerson(personName) {
    //your code here
    let newArray = [];
    for (let index = 0; index < people.length; index++) {
        const element = people[index];
        if (element != personName) {
            newArray.push(element);
        }

    }
return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));