const { Post } = require("../models");

const postData = [
  {
    title: "JavaScript: The Language of the Web",
    post_text:
      "JavaScript is a versatile and powerful programming language that runs on the client-side as well as the server-side with Node.js.",
    user_id: 1,
  },
  {
    title: "The Beauty of Clean Code",
    post_text:
      "Writing clean and maintainable code is crucial for every programmer. It leads to better collaboration and easier debugging.",
    user_id: 1,
  },
  {
    title: "The Evolution of Web Development",
    post_text:
      "From simple HTML pages to complex web applications, web development has evolved significantly over the years with the introduction of new technologies and frameworks.",
    user_id: 4,
  },
  {
    title: "Database Design: Building Efficient Schemas",
    post_text:
      "Creating well-designed database schemas is essential for optimized data storage and retrieval in applications.",
    user_id: 5,
  },
  {
    title: "Building Scalable APIs with Node.js",
    post_text:
      "Node.js provides an excellent platform for building scalable and performant APIs to handle a large number of requests concurrently.",
    user_id: 2,
  },
  {
    title: "The Power of Algorithms",
    post_text:
      "Understanding and implementing efficient algorithms is crucial for solving complex computational problems and improving application performance.",
    user_id: 3,
  },
  {
    title: "Exploring Artificial Intelligence in Programming",
    post_text:
      "AI and machine learning are transforming the world of programming, enabling developers to build intelligent applications and systems.",
    user_id: 6,
  },
];

const seedPosts = async () => {
  try {
    await Post.bulkCreate(postData);
    console.log("Posts seeded successfully.");
  } catch (err) {
    console.log("Error seeding posts:", err);
  }
};

module.exports = seedPosts;
