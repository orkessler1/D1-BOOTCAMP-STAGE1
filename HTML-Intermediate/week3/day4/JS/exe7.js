// Your way (visible only in DevTools):
(function(kids, partner, city, job) {
  console.log(`You will be a ${job} in ${city}, and married to ${partner} with ${kids} kids.`);
})(3, "Alex", "Tel Aviv", "Frontend Developer");

// Recommended (visible to the user on the page):
(function(kids, partner, city, job) {
  const msg = `You will be a ${job} in ${city}, and married to ${partner} with ${kids} kids.`;
  const p = document.createElement('p');
  p.textContent = msg;                 // safe text insert
  document.body.appendChild(p);        // shows on the page
})(3, "Alex", "Tel Aviv", "Frontend Developer");
