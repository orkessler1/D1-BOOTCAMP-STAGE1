const getPosts = (userId) => new Promise((resolve) => {
  setTimeout(() => {
    console.log("Post", "Done!");
    resolve([{ title: "Article on Javascript", idArticle: 1, idUser: userId }]);
  }, 1500);
});

const getComments = (postId) => new Promise((resolve) => {
  setTimeout(() => {
    console.log("Comments", "Done!");
    resolve([
      { title: "Great Article", author: "John" },
      { title: "Interesting Article", author: "Lea" },
    ]);
  }, 1500);
});

const getLikes = (postId) => new Promise((resolve) => {
  setTimeout(() => {
    console.log("Likes", "Done!");
    resolve(5);
  }, 1500);
});

console.log("Test1");

const getLatestPostActivity = async (userId) => {
  try {
    const posts = await getPosts(userId);
    const latestPost = posts[0];
    const comments = await getComments(latestPost.idArticle);
    const likes = await getLikes(latestPost.idArticle);
    return { comments, likes };
  } catch (err) {
    // בגרסה שלך אין reject, אבל אם יהיה — זה יתפס כאן
    console.error("Error in getLatestPostActivity:", err);
    throw err; // מעביר את השגיאה למעלה ל-.catch של השרשרת (אם קיים)
  }
};

getLatestPostActivity(10).then((res) => {
  console.log("everything", res);
});

console.log("Test2");


