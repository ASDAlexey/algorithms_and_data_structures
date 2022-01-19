// сортировка выбором
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [0,1,1,2,3.......]
let count = 0;

// O(n*n)
const selectionSearch = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      count++;
    }

    // replace Array Elements Places
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }

  return arr;
}

console.log(selectionSearch(array)); // [-5,-1,0,1,1,1,2,2,2,2,3,3,4,4,5,6,6,6,6,7,8,9,9,23,32,35]
console.log(`array.length = ${ array.length }`); // 26
console.log(`count = ${ count }`); // 325
