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

console.log(selectionSearch(array));
console.log(`array.length = ${ array.length }`);
console.log(`count = ${ count }`);