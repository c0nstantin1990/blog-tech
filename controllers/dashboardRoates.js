const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Get user's posts
router.get("/", withAuth, async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["id", "post_text", "title", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    res.render("dashboard", { posts, loggedIn: true });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get edit post form by ID
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "post_text", "title", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!post) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }

    res.render("edit-post", { post, loggedIn: true });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get edit user form
router.get("/edituser", withAuth, async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.session.user_id,
      },
    });

    if (!user) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }

    res.render("edit-user", { user, loggedIn: true });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
