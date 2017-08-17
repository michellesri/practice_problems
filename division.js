// get the largest common divisor of two numbers

function Division(num1, num2) {
    var largestFactor = 1;
    var smallerNum = min(num1, num2)

    for (i = 1; i <= smallerNum; i++) {
      if ((num1 % i === 0) && (num2 % i === 0) && (i > largestFactor)) {
          largestFactor = i;
      }
    }
    return largestFactor;
}
