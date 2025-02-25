// Day 2. Create a function that returns the sum of any given array

function simpleArraySum(arr) {
  let sum;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//This function uses a for loop method to loop around each iterization till it gets to the end of the array (arr.length), then the loop stops.

// Day 3. The task I had was to compare two arrays indexes and return points to arrays with greater values i.e if a[i] > b[i] return a = 1
let c = 0;
let d = 0;
function compareArray(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      c++;
    } else if (b[i] > a[i]) {
      d++;
    }
  }

  let combinedArray = Array.of(c, d);

  return combinedArray;
}

//Day 4. I worked on a problem that creates a function that returns the sum of all integers in an array
//I used the for loop to loop through the array (any given array) while adding each value to a variable with initial state of 0

function aVeryBigSum(ar) {
  let arrSum = 0;
  for (let i = 0; i < ar.length; i++) {
    arrSum += ar[i];
  }
  return arrSum;
}

//Day 5. working with square matrix. calculate the difference between the sums of its diagonal.

function diagonaDiffernce(arr) {
  let sumOfLeftToRight = arr[0][0] + arr[1][1] + arr[2][2];
  let sumOfRightToLeft = arr[0][2] + arr[1][1] + arr[2][0];
  const difference = sumOfLeftToRight - sumOfRightToLeft;
  return Math.abs(difference);
}

//this challenge was focused on arrays in arrays. The solution here only works for 3 x3 matrix.

//Creating one that works for any length of a matrix array.

function universalDiagonalDifference(arr) {
  let sumOfLtR = 0;
  let sumOfRtL = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    sumOfLtR += arr[i][i];
    sumOfRtL += arr[i][n - 1 - i];
  }
  const difference2 = sumOfLtR - sumOfRtL;
  return Math.abs(difference2)
}


//This function is a univeral one that works with any size of matrix.
//I used a for loop to loop through each array while adding the sum to the iteratted value of "sumOfLtR" and "sumOfRtL"


//Day 6 - Grading students. This challenge was to create a function that maps through an array of students scores and returns their new scores if some conditions are met

function gradingStudents(grades) {
  return grades.map(grade => {
    if (grade >= 38){
      let multipleOfFive = Math.ceil(grade /5) * 5
      return (multipleOfFive - grade < 3) ? multipleOfFive : grade
    }else{
      return grade
    }
  })
}

//Day 7. Staircase detail. a function that prints a staircase with the same base and height. the staircase is made up of "#" and " "
function staircase(n){
  let result = ""
  for (let i = 1; i <= n; i++){
     let space = " ".repeat(n-i)
     let hash = "#".repeat(i)

     result = space + hash 
     console.log(result)
  }
  
}
