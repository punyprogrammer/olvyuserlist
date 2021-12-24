const router = require("express").Router();
const User = require("../models/User");
//route to search users and using pagination
router.get("/", async (req, res) => {
  // search functionality
  try {
    let search;
    const { searchQuery } = req.query;
    const queryObject = {};
    if (Number(searchQuery)) {
      queryObject.ID = Number(searchQuery);
    } else if (searchQuery) {
      queryObject.FirstNameLastName = {
        $regex: searchQuery,
        $options: "i",
      };
    }
    //Get the search results
    let results;
    results = User.find(queryObject);
    //pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 30;
    const skip = (page - 1) * limit;
    //apply the pagination filter
    results = results.limit(limit).skip(skip);
    //finally fetch  the results
    const users = await results;
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
