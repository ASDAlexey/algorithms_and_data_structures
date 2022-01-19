const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

// O(n)
const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === item) {
      return i;
    }
  }

  return null;
};

console.log(linearSearch(array, 11)); // element index in array in current case 3
console.log(`count = ${count}`);
