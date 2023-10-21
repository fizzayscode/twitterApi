const express = require("express");
const {
  getAllTweet,
  getTweet,
  createTweet,
  updateTweet,
  deleteTweet,
} = require("../controller/tweet-controller");

const router = express.Router();

router.route("/").get(getAllTweet).post(createTweet);

router.route("/:id").get(getTweet).patch(updateTweet).delete(deleteTweet);

module.exports = router;
