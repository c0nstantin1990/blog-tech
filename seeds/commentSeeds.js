const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I love experimenting with different programming languages.",
    post_id: 4,
    user_id: 2,
  },
  {
    comment_text: "Great post! I really enjoyed reading it.",
    post_id: 1,
    user_id: 3,
  },
  {
    comment_text:
      "Handlebars partials have proven to be invaluable in efficiently organizing my frontend code.",
    post_id: 1,
    user_id: 4,
  },
  {
    comment_text: "Looking forward to more tutorials from you.",
    post_id: 2,
    user_id: 5,
  },
  {
    comment_text:
      "I just completed my BootCamp and landed my first programming job!",
    post_id: 3,
    user_id: 1,
  },
  {
    comment_text: "This is an excellent resource for learning web development.",
    post_id: 3,
    user_id: 6,
  },
  {
    comment_text: "I'm inspired by your coding journey. Keep it up!",
    post_id: 4,
    user_id: 1,
  },
];

const seedComments = async () => {
  try {
    await Comment.bulkCreate(commentData);
    console.log("Comments seeded successfully.");
  } catch (err) {
    console.log("Error seeding comments:", err);
  }
};

module.exports = seedComments;
