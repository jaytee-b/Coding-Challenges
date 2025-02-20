// Day 2. Create a function that returns the sum of any given array

function simpleArraySum(arr){
    let sum 
    for (let i =0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}


//This function uses a for loop method to loop around each iterization till it gets to the end of the array (arr.length), then the loop stops.


// Day 3. The task I had was to compare two arrays indexes and return points to arrays with greater values i.e if a[i] > b[i] return a = 1
let c = 0
let d = 0
function compareArray(a,b) {
    for (let i =0 ; i < a.length; i ++){
        if(a[i] > b[i]){
            c++
        } else if (b[i] > a[i]) {
            d++
        }
    }
    
    let combinedArray =Array.of(c,d)
    
    return combinedArray

}


//Day 4. I worked on a problem that creates a function that returns the sum of all integers in an array
//I used the for loop to loop through the array (any given array) while adding each value to a variable with initial state of 0

function aVeryBigSum(ar) {
    let arrSum = 0
    for (let i = 0; i < ar.length; i++){
        arrSum += ar[i]
    }
    return arrSum
}
