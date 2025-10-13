console.log("Starting ...")


const getArtwork = () => {
    console.log("Working ...")
    fetch("https://api.artic.edu/api/v1/artworks/14572")
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((obj) => {
            console.log(obj);
            console.log(`The painting is named ${obj.data.title} 
                         by the artist ${obj.data.artist_title}`)
        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}


getArtwork()

console.log("Starting ...")

const data = {
    title: "Article on Javascript",
    body: "This is an article presenting the new features of Javascript", 
    userId:1
}

const objBody = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
}

const addArticle = () => {
    console.log("Working ...")
    fetch("https://jsonplaceholder.typicode.com/posts", objBody)
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong post")
            }
        })
        .then((obj) => {
            console.log(obj);
        })
        .catch((error)  => {
            console.log(error);
        });
    console.log("Work Done ...")
}

addArticle()



console.log("Starting ...");

const objOptions = {
  method: "GET",
  headers: { "Accept": "application/json" }
};

const getChuckJokeByCategory = (category) => {
  console.log("Working ...");
  const url = `https://api.chucknorris.io/jokes/random?category=${encodeURIComponent(category)}`;

  fetch(url, objOptions)
    .then((response) => {
      console.log(response);
      if (response.ok === true) {
        return response.json();
      } else {
        throw new Error(`Wrong request: ${response.status} ${response.statusText}`);
      }
    })
    .then((obj) => {
      // obj.value contains the joke text
      console.log("Joke:", obj.value);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("Work Done ...");
};

// דוגמה לשימוש:
getChuckJokeByCategory("dev"); // אפשר: animal, movie, sport, fashion, וכו'
