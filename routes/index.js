const express = require("express");
const router = express.Router();
const ParksModel = require("../models/parks");

/* GET home page. */

router.get("/", async (req, res, next) => {
  const parkList = await ParksModel.getAll();
  console.log("the parklist is: ", parkList);

  res.render("template", {
    locals: {
      title: "Time to shred bruh index!",
      parkData: parkList
    },
    partials: {
      partial: "partial-index"
    }
  });
});

module.exports = router;
