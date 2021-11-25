const express = require("express");
const { User } = require("../models");
const {
	getAllUser,
	getUserDetail,
	getAllUserByPagination,
	removeUser,
	updateUser,
	createUser,
	changePassword,
	uploadAvatar,
	searchUserByName,
	searchUserByNamePagination,
} = require("../controllers/user.controller");
const {
	checkExist,
	checkExistForCreatUser,
} = require("../middlewares/validation/check-exist.middleware");
const {
	authentication,
	authorize,
} = require("../middlewares/auth/verify-token.middleware");
const {
	uploadImageSingle,
} = require("../middlewares/upload/upload-imgage.middleware");

const userRouter = express.Router();

userRouter.get("/get-all-user", getAllUser);

userRouter.get("/userId=:id", authentication, checkExist(User), getUserDetail);

userRouter.get("/get-all-user-by-pagination", getAllUserByPagination);

userRouter.delete(
	"/remove-user-id=:id",
	authentication,
	authorize(["ADMIN"]),
	checkExist(User),
	removeUser,
);

userRouter.post(
	"/create-user",
	authentication,
	authorize(["ADMIN"]),
	checkExistForCreatUser,
	createUser,
);

userRouter.put(
	"/update-user-id=:id",
	authentication,
	checkExist(User),
	updateUser(["ADMIN"]),
);
userRouter.put(
	"/change-password-userId=:id",
	authentication,
	checkExist(User),
	changePassword,
);

userRouter.post(
	"/upload-avatar",
	authentication,
	uploadImageSingle("avatar"),
	uploadAvatar,
);

userRouter.get("/search-user", searchUserByName);

userRouter.get("/search-user-pagination", searchUserByNamePagination);

module.exports = {
	userRouter,
};
