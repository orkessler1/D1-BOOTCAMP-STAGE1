console.log("Starting ...");

// שים כאן את המפתח שלך מהגייפי
const API_KEY = "PASTE_YOUR_GIPHY_API_KEY_HERE";

// בניית ה־URL לפי ההוראות (query + rating + api_key)
const query = "hilarious";
const rating = "g";
const url = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

const options = {
  method: "GET",
  headers: { "Accept": "application/json" },
};

const getGifs = () => {
  console.log("Working ...");

  fetch(url, options)
    .then((response) => {
      console.log("HTTP status:", response.status);
      if (response.ok === true) {
        return response.json();
      } else {
        // ננסה להוציא הודעת שגיאה מהגוף אם קיימת
        return response
          .json()
          .then((err) => {
            throw new Error(`Request failed ${response.status} ${response.statusText} — ${err?.message || "No details"}`);
          })
          .catch(() => {
            // אם אי אפשר היה לפרסר JSON של השגיאה
            throw new Error(`Request failed ${response.status} ${response.statusText}`);
          });
      }
    })
    .then((obj) => {
      // זה כל האובייקט שחוזר מה-API
      console.log("Full object:", obj);

      // דוגמה: להדפיס כמה תוצאות קיבלנו
      console.log("Total returned:", obj.data.length);

      // דוגמה: להדפיס URL של ה-GIF הראשון (אם יש)
      if (obj.data.length > 0) {
        console.log("First GIF URL:", obj.data[0].url);
        // או קישור ישיר למדיה:
        // console.log("First GIF mp4:", obj.data[0].images?.original?.mp4);
      }
    })
    .catch((error) => {
      console.log("Error:", error.message);
    });

  console.log("Work Done ...");
};

getGifs();



async function fetchStarship() {
  try {
    const url = "https://www.swapi.tech/api/starships/9/";
    const res = await fetch(url);

    if (!res.ok) {
      // אם הסטטוס לא 2xx – נזרוק שגיאה עם הסטטוס
      const text = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} ${res.statusText}${text ? " — " + text : ""}`);
    }

    const data = await res.json();
    console.log(data.result); // בדיוק כמו בקוד שלך
  } catch (err) {
    console.error("Error:", err.message);
  }
}

fetchStarship();
