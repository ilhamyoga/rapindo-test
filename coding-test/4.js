// Coding Test - 4. Smallest Missing Prime Number

function smallAndLargeNumber(arr) {
  let small = arr[0] || 0;
  let large = arr[0] || 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return [small, large];
}

function findPrimeNumber(arr) {
  return arr.filter((num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  })
}

function findMissingNumber(arr, length) {
  let missingNumbers = [];
  for (let i = 1; i <= length; i++) {
    !arr.includes(i) && missingNumbers.push(i);
  }
  return missingNumbers;
}

function findSmallestMissingPrimeNumber(arr) {
  const [_, large] = smallAndLargeNumber(arr);
  const missingNumbers = findMissingNumber(arr, large);
  const primeNumbers = findPrimeNumber(missingNumbers);

  if (primeNumbers.length === 0) {
    let i = large;
    while (true) {
      i++;
      const missingPrime = findPrimeNumber([i]);
      if (missingPrime.length > 0) {
        i = missingPrime[0];
        break; 
      }
    }
    return i;
  } else {
    return smallAndLargeNumber(primeNumbers)[0];
  }
}

console.log(findSmallestMissingPrimeNumber([4, 2, 1, -7, 3, 4])); // 5
console.log(findSmallestMissingPrimeNumber([-2, -1, 0, -4, 0])); // 2
console.log(findSmallestMissingPrimeNumber([1, 2, 3, 5, 7, 8])); // 11
console.log(findSmallestMissingPrimeNumber([1, 2, 0, 5, 7, 8])); // 3
console.log(findSmallestMissingPrimeNumber([])); // 2