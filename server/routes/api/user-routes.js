const router = require("express").Router();
const {
  getUserRecipes,
  createUser,
  userLogin,
} = require("../../controller/recipe");
const { authMiddleware } = require("../../utils/auth");

// router.route("/").get(getUserRecipes);

router.route("/:id").get(authMiddleware, getUserRecipes);

router.route("/new").post(createUser);

router.route("/login").post(userLogin);

module.exports = router;
