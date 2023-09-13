const {Router} = require("express");
const {
  getAllPosts,
  createPost,
  updatePost,
  getPostById,
} = require("../handlers/postsHandlers");

const postRouter = Router();

postRouter.get("/posts", getAllPosts);

postRouter.get("/posts/:id", createPost);

postRouter.post("/posts", updatePost);

postRouter.put("/posts/:id", getPostById);

module.exports = postRouter;
