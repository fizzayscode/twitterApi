const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllTweet = (req, res) => {
  const tweets = prisma.tweet.find();

  if (!tweets) {
    res.sendStatus(401).json({ msg: "user has no tweets" });
  }

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
