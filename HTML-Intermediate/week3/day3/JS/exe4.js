const form = document.getElementById('MyForm');
const radiusInput = document.getElementById('radius');
const volumeInput = document.getElementById('volume');

// מאזין לאירוע שליחת טופס
form.addEventListener('submit', function (e) {
  e.preventDefault();  

const r = parseFloat(radiusInput.value.replace(',', '.'));


const volume = (4 / 3) * Math.PI * (r ** 3);
console.log('Radius:', r, 'Volume:', volume);
});