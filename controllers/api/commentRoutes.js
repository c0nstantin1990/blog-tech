const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve comments" });
  }
});

// Create a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const { comment_text, post_id } = req.body;
    const comment = await Comment.create({
      comment_text,
      post_id,
      user_id: req.session.user_id,
    });
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to create a comment" });
  }
});

// Delete a comment by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedComment) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.json(deletedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete the comment" });
  }
});

module.exports = router;
