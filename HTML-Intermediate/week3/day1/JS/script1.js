// לוודא שזה הקובץ הנכון
console.log("== script1.js loaded ==");

// 1) אובייקט של משתמש
const user = {
  username: "oror",
  password: "1234"
};

// 2) מערך שמכיל את האובייקט (database)
const database = [user];

// הדפסה לעמוד (database)
const out = document.getElementById("output");
if (out) {
  out.textContent = JSON.stringify(database, null, 2);
}
console.log("database:", database);

// 3) newsfeed – מערך של 3 אובייקטים
// כל אובייקט מייצג "פוסט" עם שני שדות: username ו-timeline (שניהם מחרוזות)
const newsfeed = [
  { username: "oror",  timeline: "I love JavaScript!" },
  { username: "alice", timeline: "Coffee first, then code." },
  { username: "bob",   timeline: "Day 1 in week 3 🚀" }
];

// הדפסה לעמוד (newsfeed)
const feedOut = document.getElementById("feed");
if (feedOut) {
  feedOut.textContent = JSON.stringify(newsfeed, null, 2);
}
console.log("newsfeed:", newsfeed);
