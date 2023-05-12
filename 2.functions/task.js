function getArrayParams(...arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    avg = +(sum / arr.length).toFixed(2);
  }
  return { min: min, max: max, avg: avg };
}
getArrayParams([-99, 99, 10]);
getArrayParams([1, 2, 3, -100, 10]);
getArrayParams([5]);






function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork(arrOfArr, func) {

}
