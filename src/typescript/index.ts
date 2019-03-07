import Worker from 'algs/sortQuick.worker.js';

const worker = new Worker();
let arr = [];
for(let i=100; i>1; i--){
  arr.push(getRandomInt(0, 100))
}

worker.postMessage(arr)
worker.onmessage = function (e) {
  console.log( 'WorkerSort', e.data )
};

// worker.addEventListener("message", function (event) {});


// Возвращает случайное число между 0 (включительно) и 1 (не включая 1)
function getRandom() {
  return Math.random();
}
// Возвращает случайное число между min (включительно) и max (не включая max)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}