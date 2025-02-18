// Day 2. Create a function that returns the sum of any given array

function simpleArraySum(arr){
    let sum 
    for (let i =0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}


//This function uses a for loop method to loop around each iterization till it gets to the end of the array (arr.length), then the loop stops.