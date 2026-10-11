import express from 'express';
import { register,login, logout,updateProfile} from '../controllers/user.controller.js';
import authenticateToken from '../middleware/isAuthenticated.js';
import upload from "../middleware/multer.js";
const router =express.Router();

router.route("/register").post(upload.single("file"), register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(authenticateToken,upload.single("file"),updateProfile);

export default  router;