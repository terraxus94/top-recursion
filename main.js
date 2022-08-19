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

function mergeSortMan(array) {
  console.log(array);
  let array1 = array.slice(0, array.length / 2);
  let array2 = array.slice(array.length / 2);
  console.log(array1);
  console.log(array2);

  let array11 = array1.slice(0, array1.length / 2);
  let array12 = array1.slice(array1.length / 2);
  console.log(array11);
  console.log(array12);

  let array21 = array2.slice(0, array2.length / 2);
  let array22 = array2.slice(array2.length / 2);
  console.log(array21);
  console.log(array22);

  let array31 = [],
    array32 = [];
  if (array11[0] < array11[1]) {
    array31.push(array11[0]);
    array31.push(array11[1]);
  } else {
    array31.push(array11[1]);
    array31.push(array11[0]);
  }
  if (array12[0] < array12[1]) {
    array32.push(array12[0]);
    array32.push(array12[1]);
  } else {
    array32.push(array12[1]);
    array32.push(array12[0]);
  }

  console.log(array31);
  console.log(array32);

  let array41 = [],
    array42 = [];
  if (array21[0] < array21[1]) {
    array41.push(array21[0]);
    array41.push(array21[1]);
  } else {
    array41.push(array21[1]);
    array41.push(array21[0]);
  }
  if (array22[0] < array22[1]) {
    array42.push(array22[0]);
    array42.push(array22[1]);
  } else {
    array42.push(array22[1]);
    array42.push(array22[0]);
  }

  console.log(array41);
  console.log(array42);
}

// smergeSortMan(unsortedArray);

function mergeSortRec(array) {
  console.log(array);
  let array1 = [],
    array2 = [];
  //array
  // if array.length > 2 split na pola

  if (array.length > 2) {
    let tempArray = [];
    tempArray.push(array.slice(0, array.length / 2));
    tempArray.push(array.slice(array.length / 2));
    //console.log(tempArray);
    tempArray.forEach((entry) => {
      mergeSortRec(entry);
    });

    // array1 = array.slice(0, array.length / 2);
    // let temp1 = [];
    // temp1.push(mergeSortRec(array1));
    // console.log(temp1);
    // array2 = array.slice(array.length / 2);
    // mergeSortRec(array2);
  }

  // if array.len = 2 compare first elements
  if (array.length == 2) {
    if (array[0] < array[1]) {
      console.log(array);
      return array;
    } else {
      let temp = array[0];
      array[0] = array[1];
      array[1] = temp;
      console.log(array);
      return array;
    }
  }
}
// mergeSortRec(unsortedArray);

function mergeSortRec2(array) {
  console.log(array);
  if (array.length == 1) {
    return array;
  }

  if (array.length > 1) {
    let tempArray = [];
    tempArray.push(array.slice(0, array.length / 2));
    tempArray.push(array.slice(array.length / 2));
    //console.log(tempArray);
    tempArray.forEach((entry) => {
      mergeSortRec2(entry);
    });
  }
}
// mergeSortRec2(unsortedArray);
