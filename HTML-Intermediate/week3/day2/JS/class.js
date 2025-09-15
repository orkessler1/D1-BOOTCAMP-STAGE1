// פונקציה קטנה שמדפיסה גם לקונסול וגם לעמוד
function log(msg) {
  console.log(msg);
  var el = document.getElementById("log");
  if (el) { el.textContent += msg + "\n"; }
}

// ===== דוגמה 1: משתנה גלובלי =====
let eyeColor = "blue";

function userMoreInfo(userName, userAge) {
  log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColor + " eyes");
}

function favoriteColor() {
  log("My favorite color is " + eyeColor);
}

userMoreInfo("Sarah", 22);   // מדפיס לעמוד ולקונסול
favoriteColor();
log(eyeColor);               // "blue"

// ===== דוגמה 2: משתנה לוקאלי בתוך פונקציה =====
function userMoreInfoLocal(userName, userAge) {
  let eyeColorLocal = "blue"; // מקומי לפונקציה בלבד
  log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColorLocal + " eyes");
}
userMoreInfoLocal("Sarah", 22);

// הדגמת ReferenceError בצורה בטוחה:
try {
  log(eyeColorLocal);
} catch (e) {
  log("ReferenceError as expected: " + e.message);
}
