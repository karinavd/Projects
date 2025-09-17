import express from 'express';
import {signUp} from'../Controllers/userControllerFolder/userControllerSignUp.js'
import {login} from'../Controllers/userControllerFolder/userControllerLogin.js'
 const router = express.Router();
router.post('/signUp',signUp);
router.post('/login',login);
export default router;