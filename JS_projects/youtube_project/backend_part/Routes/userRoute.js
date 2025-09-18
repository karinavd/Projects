import express from 'express';
import {signUp} from '../../backend_part/Controllers/userControllerFolder/userControllerSignUp.js'
import {login} from'../../backend_part/Controllers/userControllerFolder/userControllerLogin.js'
import logout from '../Controllers/userControllerFolder/logout.js';
 const router = express.Router();
router.post('/signUp',signUp);
router.post('/login',login);
router.post('/logout',logout);
export default router;