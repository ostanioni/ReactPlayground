/* eslint-disable */
/*tslint:disabled*/
// Post data to parent thread


// Respond to message from parent thread
self.onmessage = function(e){
  self.postMessage('Hello from worker')
}

let arr = [];
for(let i=100; i>1; i--){
  arr.push(getRandomInt(0, 100))
}

console.log('Unodered array:', arr)

onmessage = function(e) {
  //console.log('Message received from main script');
  //var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  //console.log('Posting message back to main script');
  postMessage( quickSort(e.data) );
}

function quickSort(items) {
  return quickSortHelper(items, 0, items.length-1);
}
function quickSortHelper(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }
    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}
function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right]= temp;
      left++;
      right--;
    }
  }
  return left;
}
 