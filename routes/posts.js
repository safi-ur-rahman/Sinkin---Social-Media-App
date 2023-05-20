const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers");
const upload = require('../middleware/upload');
const { verifyToken, optionallyVerifyToken } = require("../middleware/auth");

router.get("/", optionallyVerifyToken, postControllers.getPosts);
// router.post("/", verifyToken, postControllers.createPost);
router.post("/", upload.single('image'), verifyToken, postControllers.createPost);

router.get("/:id", optionallyVerifyToken, postControllers.getPost);
router.patch("/:id", verifyToken, postControllers.updatePost);
router.delete("/:id", verifyToken, postControllers.deletePost);

router.post("/like/:id", verifyToken, postControllers.likePost);
router.delete("/like/:id", verifyToken, postControllers.unlikePost);
router.get(
  "/liked/:id",
  optionallyVerifyToken,
  postControllers.getUserLikedPosts
);

module.exports = router;
