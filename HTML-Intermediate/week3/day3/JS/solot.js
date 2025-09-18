console.log('JS loaded'); // בדיקת טעינה

const btn = document.getElementById('jsstyle');

btn.addEventListener('mouseenter', () => btn.classList.add('hovered'));
btn.addEventListener('mouseleave', () => btn.classList.remove('hovered','pressed'));

btn.addEventListener('mousedown', () => btn.classList.add('pressed'));
btn.addEventListener('mouseup',   () => btn.classList.remove('pressed'));

btn.addEventListener('focus', () => btn.classList.add('focused'));
btn.addEventListener('blur',  () => btn.classList.remove('focused'));

btn.addEventListener('click', () => btn.classList.toggle('rounded'));
