// משתנה גלובלי שיכיל את כל הפריטים המודגשים בתוך הפסקה
let allBoldItems;

// אוספת את כל הפריטים המודגשים (<strong>/<b>) מתוך הפסקה ושומרת בגלובלי
function getBoldItems() {
  const p = document.getElementById('para');
  allBoldItems = p ? p.querySelectorAll('strong, b') : [];
  return allBoldItems;
}

// צובעת את כל הטקסטים המודגשים בכחול
function highlight() {
  if (!allBoldItems) getBoldItems();
  for (const el of allBoldItems) {
    el.style.color = 'blue';
  }
}

// מחזירה את צבע הטקסט המודגש לברירת המחדל
function returnItemsToDefault() {
  if (!allBoldItems) getBoldItems();
  for (const el of allBoldItems) {
    el.style.color = '';
  }
}

// רישום מאזינים: כשהעכבר נכנס → highlight, יוצא → returnItemsToDefault
document.addEventListener('DOMContentLoaded', () => {
  getBoldItems();
  const p = document.getElementById('para');
  p.addEventListener('mouseover', highlight);
  p.addEventListener('mouseout',  returnItemsToDefault);
});
