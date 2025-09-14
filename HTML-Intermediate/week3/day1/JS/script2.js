console.log("script2.js loaded"); // בדיקת טעינה

let result = "";

for (let i = 0; i <= 15; i++) {
  let msg;
  if (i % 2 == 0) {
    msg = i + " is even";
  } else {
    msg = i + " is odd";
  }

  console.log(msg);            // לקונסול (לפי הדוגמה)
  result += msg + "<br>";      // לעמוד
}

document.getElementById("i").innerHTML = result;
