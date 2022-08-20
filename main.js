// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

//console.log(fibs(8));

// Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

function fibsRec(n, sequence = [0, 1]) {
  if (sequence.length >= n) {
    return sequence;
  }

  sequence[sequence.length] =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];
  return fibsRec(n, sequence);
}

// console.log(fibsRec(8));

// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// Tips:
// Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same method!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

let unsortedArray = [4, 8, 6, 2, 1, 7, 5, 3];

function mergeSortRec(array) {
  if (array.length === 1) return array;
  let firstHalf = [],
    secondHalf = [];

  firstHalf = array.slice(0, array.length / 2);
  secondHalf = array.slice(array.length / 2);
  //console.log(firstHalf, secondHalf);
  return merge(mergeSortRec(firstHalf), mergeSortRec(secondHalf));
}

function merge(array1, array2) {
  let sortedArray = [];
  let counter1 = 0,
    counter2 = 0;
  console.log(array1, array2);

  while (counter1 < array1.length && counter2 < array2.length) {
    if (array1[counter1] < array2[counter2]) {
      sortedArray.push(array1[counter1]);
      counter1++;
    } else {
      sortedArray.push(array2[counter2]);
      counter2++;
    }
  }

  if (counter1 < array1.length) {
    sortedArray.push(array1[counter1]);
    counter1++;
  }

  if (counter2 < array2.length) {
    sortedArray.push(array2[counter2]);
    counter2++;
  }

  return sortedArray;
}
console.log(unsortedArray);
console.log(mergeSortRec(unsortedArray));
