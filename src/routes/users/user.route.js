const { Router } = require("express");
const {
  createUser,
  getUsers,
} = require("../../controllers/user/user.controller");

const router = Router();

router.route("/").post(createUser).get(getUsers);

module.exports = router;
