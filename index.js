import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Initialize posts array (temporary storage)
let posts = [];

// Home Route - View all posts
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

// New post
app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.postTitle,
    body: req.body.postBody,
  };
  posts.push(post);
  res.redirect("/");
});

// View post
app.get("/view/:index", (req, res) => {
    const postIndex = req.params.index;
    res.render("view-post.ejs", { post: posts[postIndex], index: postIndex });
  });

// Edit post
app.get("/edit/:index", (req, res) => {
  const postIndex = req.params.index;
  res.render("edit.ejs", { post: posts[postIndex], index: postIndex });
});

app.post("/edit/:index", (req, res) => {
  const postIndex = req.params.index;
  posts[postIndex].title = req.body.postTitle;
  posts[postIndex].content = req.body.postBody;
  res.redirect("/");
});

// Delete the post
app.post("/delete/:index", (req, res) => {
  const postIndex = req.params.index;
  posts.splice(postIndex, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
