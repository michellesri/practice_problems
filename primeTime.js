// prime time / if prime

function PrimeTime(num) {
  // if less than 2
  if (num < 2) return false;
  // if not an int
  if (num !== Math.ceil(num)) return false;
