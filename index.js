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
  return Math.abs(difference2);
}

//This function is a univeral one that works with any size of matrix.
//I used a for loop to loop through each array while adding the sum to the iteratted value of "sumOfLtR" and "sumOfRtL"

//Day 6 - Grading students. This challenge was to create a function that maps through an array of students scores and returns their new scores if some conditions are met

function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade >= 38) {
      let multipleOfFive = Math.ceil(grade / 5) * 5;
      return multipleOfFive - grade < 3 ? multipleOfFive : grade;
    } else {
      return grade;
    }
  });
}

//Day 7. Staircase detail. a function that prints a staircase with the same base and height. the staircase is made up of "#" and " "
function staircase(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let hash = "#".repeat(i);

    result = space + hash;
    console.log(result);
  }
}

//Day 8. finding the maximum number(s) in an array and returning their length
//(birthday cake question)
function birthdayCakeCandles(candles) {
  let max = candles[0]; //assume that this is the max number in the array
  let maxInstances = [max];

  for (let i = 1; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    } else if (candles[i] === max) {
      maxInstances.push(max);
    }
  }
  return maxInstances.length;
}

//day 9. min. max value. finding the min values in an array and the max values

function breakingRecords(scores) {
  let maxRecord = scores[0];
  let minRecord = scores[0];
  let maxArray = [];
  let minArray = [];

  for (let i = 1; i < scores.length; i++) {
    if (maxRecord < scores[i]) {
      maxRecord = scores[i];
      maxArray.push(maxRecord);
    } else if (minRecord > scores[i]) {
      if (minRecord === scores[i]) {
      } else {
        minRecord = scores[i];
      }
      minArray.push(minRecord);
    }
  }
  return [maxArray.length, minArray.length];
}
///my methdod works but i found a simplified one on perplexity where u count the instances directly instead of using the .length

function breakingRecords(scores) {
  let maxRecord = scores[0];
  let minRecord = scores[0];
  let maxBreaks = 0;
  let minBreaks = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxRecord) {
      maxRecord = scores[i];
      maxBreaks++;
    } else if (scores[i] < minRecord) {
      minRecord = scores[i];
      minBreaks++;
    }
  }
  return [maxBreaks, minBreaks];
}

//Day 10. COMPLETE A FUNCTION THAT COUNTS THE AMOUNT OF ORANGLES AND APPLES THAT FALL ON A HOUSE THATS IN THE MIDDLE OF TWO TREES

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleOnHouse = 0;
  let orangeOnHouse = 0
  for (let i =0; i < apples.length; i ++){
    let appleDistance = apples[i] + a
    if(appleDistance >= s && appleDistance <=t){
      appleOnHouse++;
    }
  }

  for (let i=0; i<oranges.length; i++){
    let orangeDistance = oranges[i] + b
    if(orangeDistance >= s && orangeDistance <= t){
      orangeOnHouse++
    }
  }

  console.log(appleOnHouse);
  console.log(orangeOnHouse);
}


//Day 11. Kangaroo question- solve a problem involving two kangaroos jumping towards each other. The goal is to determine if they will ever meet at the same position. 


function kangaroo(x1, v1, x2,v2){
  let KangarooOne = [x1];
  let kangarooTwo = [x2];

  for (let i = 0; i < 10000; i++){
    let newMember = KangarooOne[0] + (v1 * (i+1))
    KangarooOne.push(newMember)

    let newMemberTwo = kangarooTwo[0] + (v2*(i+1))
    kangarooTwo.push(newMemberTwo)

    if(KangarooOne[KangarooOne.length-1]=== kangarooTwo[kangarooTwo.length-1]){
      return("YES")
    }
  }
  return("NO")
}


//Day 11. working with factors and multiples of numbers

function getTotalX(a,b){
  let count = 0;
  let maxA = Math.max(...a);
  let minB = Math.min(...b);
  for (let i = maxA; i <= minB; i++){
    let isValid = true

    for (let j = 0; j < a.length; j++){
      if(i % a[j] !== 0){
        isValid = false
      }
    }

    if(isValid){
      for(j = 0; j < b.length; j++){
        if(b[j] % i !== 0){
          isValid = false

        }
      }
    }
    if(isValid){
      count++
    }
  }
  return count
}

//DAY 12. SUBARRAY DIVISION

function birthday(s,d,m){
  let count = 0
  for(let i =0; i<=s.length-m; i++){
    let segment = s.slice(i,i+m)
    let sum = 0
    for(let j = 0; j < segment.length; j++){
      sum += segment[j]
    }
    if(sum ===d){
      count++
    }
  }
  return count

}