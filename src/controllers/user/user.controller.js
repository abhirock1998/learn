const asyncHandler = require("../../middlewares/async.middleware");
const UserModel = require("../../models/user.model");
const _response = require("../../utils/response.util");

const createUser = asyncHandler(async (req, res, next) => {
  console.log("req.body", req.body);

  return _response(res, "User created successfully", true, 200, {});
});

const getUsers = asyncHandler(async (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;

  const skip = (page - 1) * limit;

  const totalUsers = await UserModel.find().countDocuments();

  const users = await UserModel.find().skip(skip).limit(limit);

  return _response(res, "User retrieved successfully", true, 200, {
    users,
    totalUsers,
  });
});

module.exports = { createUser, getUsers };
