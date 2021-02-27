let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(list_of_numbers)
{
    let odd = [];
    let even = [];
    let newArray = [];
    for(let i = 0; i < list_of_numbers.length; i++){
        if(i%2==0){
            odd.push(list_of_numbers[i]);
        }
        else{
            even.push(list_of_numbers[i]);
        }
    }
    return newArray=[].concat(odd,even);
    //  list_of_numbers.sort(function(odd, even){return odd-even});  
}
console.log(mergeTwoList(list_of_numbers))

