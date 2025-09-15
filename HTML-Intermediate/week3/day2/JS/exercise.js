console.log('exercise.js loaded'); // לבדיקה שהקובץ נטען

function displayNumbersDivisible() {
  let sum = 0;
  const nums = [];
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      nums.push(i);
      sum += i;
    }
  }
  console.log('Outcome : ' + nums.join(' '));
  console.log('Sum : ' + sum);
}

displayNumbersDivisible();
