const express= require("express");
const usersController=require("../controllers/com.users/usersController")
const router=express.Router();
router.post("/users",usersController.registerMob)
router.get("/users",usersController.userData)
module.exports=router;