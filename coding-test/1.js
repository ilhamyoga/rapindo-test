// Coding Test - 1. Smallest and Largest Number

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
  return `Smallest: ${small}, Largest: ${large}`;
}

console.log(smallAndLargeNumber([-3, 0, 1, 5, 7])); // Smallest: -3, Largest: 7
console.log(smallAndLargeNumber([8, -3, 20, 1, -4])); // Smallest: -4, Largest: 20
console.log(smallAndLargeNumber([0])); // Smallest: 0, Largest: 0