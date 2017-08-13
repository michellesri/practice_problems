// prime time / if prime

function PrimeTime(num) {
  // if less than 2
  if (num < 2) return false;
  // if not an int
  if (num !== Math.ceil(num)) return false;
  // check every whole number from 2 to the square root of n.
  // If any of these divides n exactly, n cannot be prime.
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
