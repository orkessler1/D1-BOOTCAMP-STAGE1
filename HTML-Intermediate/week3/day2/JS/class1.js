// פונקציה שמקבלת את הגיל שלי ומחשבת
function myFamily(myAge) {
  const momAge = myAge * 2;        // אמא פי 2
  const dadAge = momAge * 1.2;     // אבא הוא 1.2 * מגיל אמא (כלומר myAge * 2.4)

  console.log("my mom age is " + momAge);
  console.log("my dad age is " + dadAge);

  // מציגים בעמוד
  document.getElementById("mom").textContent = momAge;
  document.getElementById("dad").textContent = dadAge;
}

// קריאה לפונקציה (כאן למשל הגיל שלי 18)
myFamily(18);


// 2–3) פונקציה שמקבלת myAge ומחזירה את גיל האמא (פי 2)
function momAge(myAge) {
  return myAge * 2;
}

// 4) קריאה לפונקציה
const result = momAge(18);

// 5) הדפסה ב-scope הגלובלי (מחוץ לפונקציה)
console.log("Mom age is:", result);


const calc = (a, op, b) => {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : NaN; // הימנעות מחלוקה באפס
    default:  return NaN;                   // אופרטור לא מוכר
  }
};

// דוגמאות:
console.log(calc(4, '+', 5)); // 9
console.log(calc(10, '-', 3)); // 7
console.log(calc(6, '*', 7)); // 42
console.log(calc(8, '/', 2)); // 4


document.body.firstElementChild
document.querySelector("div")



// שתי דרכים לתפוס את ה-<ul>
const ul1b = document.querySelector("body > ul");
const ul2b = document.body.children[1];

// שתי דרכים לתפוס את ה-<li> השני ("Pete")
const liBySelector = document.querySelectorAll("body > ul > li")[1];
const liByChildren = document.body.children[1].children[1];

console.log(liBySelector.textContent); // "Pete"
console.log(liByChildren.textContent); // "Pete"

const div = document.querySelector("div") ; 
const dis = document.body.firstElementChild;

// כל ה-UL בעמוד (NodeList)
const uls = document.querySelectorAll("ul");

// הדפסה לקונסול של כל <li> בכל <ul>
for (const ul of uls) {
  for (const li of ul.children) {
    console.log(li.textContent);
  }
}

const ul1 = document.body.children[1]; // ה-UL הראשון
const ul2 = document.body.children[2]; // ה-UL השני

for (const ul of [ul1, ul2]) {
  for (const li of ul.children) {
    console.log(li.textContent);
  }
}


const ul1 = document.body.children[1]; // ה-UL הראשון
const ul2 = document.body.children[2]; // ה-UL השני

for (const ul of [ul1, ul2]) {
  for (const li of ul.children[0]) {
    console.log(li.textContent);
  }
}



const a = document.getElementById('dI');

const href     = a.getAttribute('href');      // או a.href ל-URL מוחלט
const hreflang = a.getAttribute('hreflang');
const rel      = a.getAttribute('rel');
const target   = a.getAttribute('target');
const type     = a.getAttribute('type');

console.log({ href, hreflang, rel, target, type });





