'use-strict';
const numbers = [... Array(4)].map(e=> Math.floor(Math.random() * 100));
const randomNumber = Math.trunc(Math.random() * 100) + 1;
// for (i = 0; i < numbers.length; i++){
//     numbers[i] = randomNumber;
// }
// console.log(randomNumber);
document.querySelector('.number').textContent = numbers;
