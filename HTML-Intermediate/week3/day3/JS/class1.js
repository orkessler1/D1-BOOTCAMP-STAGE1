// app.js
function getvalue(e) {
  // מונע מהדף להתרענן
  if (e && e.preventDefault) e.preventDefault();

  // דרך 1 (פשוטה): לגשת לשדות דרך form.elements לפי name
  const form = document.getElementById('form1');
  const first = form.elements['fname'].value.trim();
  const last  = form.elements['lname'].value.trim();

  // להדגים פלט
  alert(`First: ${first}\nLast: ${last}`);

  // חשוב: להחזיר false כשמשתמשים ב-onsubmit אינ־ליין
  return false;
}
