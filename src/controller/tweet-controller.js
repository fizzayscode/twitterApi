const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllTweet = (req, res) => {
  res.send("getting all tweets");
};

const getTweet = (req, res) => {};

const createTweet = (req, res) => {};

const updateTweet = (req, res) => {};

const deleteTweet = (req, res) => {};

module.exports = {
  getAllTweet,
  getTweet,
  createTweet,
  updateTweet,
  deleteTweet,
};
