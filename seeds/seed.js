const { Blog, User, Comment } = require("../models");
const sequelize = require("../config/connection");
const userData = require("./userData.json");
const blogData = require("./blogData.json");
const commentData = require("./commentData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Blog.bulkCreate(blogData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedAll();
