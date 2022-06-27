import { register, login, updateUser } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update-user").patch(updateUser);

export default router;
