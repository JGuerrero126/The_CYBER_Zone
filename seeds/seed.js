const sequelize = require('../config/connection');
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');
const Blog = require("../models/Blog");
const User = require("../models/User");
const Comment = require("../models/Comment");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Blog.bulkCreate(blogData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedAll();