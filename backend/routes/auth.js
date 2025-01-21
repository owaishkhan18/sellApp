// this si the auth routs 
import express from "express";
import { singUp,Login,logout} from "../controller/authController.js"
import userSchema from '../models/userSchema.js'
const router=express.Router();


router.post("/Signup",singUp);
router.post("/Login",Login);
router.post("/Logout",logout);

export default router;