const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "JavaScript is such a versatile language, perfect for both frontend and backend development.",
    post_id: 3,
    user_id: 1,
  },
  {
    comment_text:
      "Python's simplicity and readability make it an excellent language for beginners to start programming.",
    post_id: 1,
    user_id: 4,
  },
  {
    comment_text:
      "I'm amazed by the power and performance of C++ in competitive programming contests.",
    post_id: 4,
    user_id: 2,
  },
  {
    comment_text:
      "Functional programming in Haskell has completely changed the way I think about solving problems.",
    post_id: 2,
    user_id: 3,
  },
  {
    comment_text:
      "Working with databases in SQL can be challenging but rewarding when you get the queries right.",
    post_id: 5,
    user_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
