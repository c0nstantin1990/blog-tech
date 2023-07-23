const { Post } = require("../models");

const postData = [
  {
    title: "Excited about JavaScript!",
    post_text:
      "JavaScript is such a versatile language, perfect for both frontend and backend development. I can't wait to finish this BootCamp and get a job.",
    user_id: 1,
  },
  {
    title: "Python's Simplicity",
    post_text:
      "Python's simplicity and readability make it an excellent language for beginners to start programming. Handlebars partials help you with avoiding to write repetitive code.",
    user_id: 4,
  },
  {
    title: "C++ for Competitive Programming",
    post_text:
      "I'm amazed by the power and performance of C++ in competitive programming contests. I love every single form potatoes can be made.",
    user_id: 2,
  },
  {
    title: "Functional Programming with Haskell",
    post_text:
      "Functional programming in Haskell has completely changed the way I think about solving problems. Working with databases in SQL can be challenging but rewarding when you get the queries right.",
    user_id: 3,
  },
  {
    title: "Understanding SQL and Security",
    post_text:
      "Working with databases in SQL can be challenging but rewarding when you get the queries right. Authorization refers to rules that determine who is allowed to do what. E.g. Adam may be authorized to create and delete databases, while Usama is only authorized to read. The two concepts are completely orthogonal and independent, but both are central to security design, and the failure to get either one correct opens up the avenue to compromise.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
