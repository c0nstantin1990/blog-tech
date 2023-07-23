const { User } = require("../models");

const userData = [
  {
    username: "AliceSmith",
    email: "alice.smith@example.com",
    password: "a1S@securePwd",
  },
  {
    username: "BobJohnson",
    email: "bob.johnson@example.com",
    password: "B0b@securePwd",
  },
  {
    username: "CharlieBrown",
    email: "charlie.brown@example.com",
    password: "C#b@securePwd",
  },
  {
    username: "DianaJohnson",
    email: "diana.johnson@example.com",
    password: "D!ana@securePwd",
  },
  {
    username: "EllaGarcia",
    email: "ella.garcia@example.com",
    password: "3lla@securePwd",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
