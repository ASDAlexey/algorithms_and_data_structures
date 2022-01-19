// сортировка пузырьком
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [0,1,1,2,3.......]
let count = 0;

// for (let j
// [0, 3, 2, 5, 6, 8, 1, 9]
// [0, 2, 3, 5, 6, 8, 1, 9]
// [0, 2, 3, 5, 6, 8, 1, 9]
// [0, 2, 3, 5, 6, 8, 1, 9]
// [0, 2, 3, 5, 6, 1, 8, 9]
// [0, 2, 3, 5, 6, 1, 8, 9]
// [0, 2, 3, 5, 6, 1, 8, 9]
// [0, 2, 3, 5, 1, 6, 8, 9]
// [0, 2, 3, 5, 1, 6, 8, 9]
// ...

// O(n*n)
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const currentEl = arr[j];
      const nextEl = arr[j + 1];
      if (currentEl > nextEl) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }

      count++;
    }
  }

  return arr;
};

console.log(bubbleSort(array));
console.log(`array.length = ${ array.length }`); // 26
console.log(`count = ${ count }`); // 676

