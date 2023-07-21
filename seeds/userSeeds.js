const { User } = require("../models");

const userData = [
  {
    username: "Alice",
    email: "alice@example.com",
    password: "alice1234",
  },
  {
    username: "Bob",
    email: "bob@example.com",
    password: "bob1234",
  },
  {
    username: "Charlie",
    email: "charlie@example.com",
    password: "charlie1234",
  },
  {
    username: "Eve",
    email: "eve@example.com",
    password: "eve1234",
  },
  {
    username: "Grace",
    email: "grace@example.com",
    password: "grace1234",
  },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(userData);
    console.log("Users seeded successfully!");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

module.exports = seedUsers;
