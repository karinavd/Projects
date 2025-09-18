import uploadVideo from '../Controllers/videoController.js';
import express from 'express';
// const express = require('express');
import { createRequire } from 'module';
import {auth} from '../middleware/authentication.js';
const require = createRequire(import.meta.url);
const router = express.Router(); 
// const videoController = require('../Controllers/videoController'); 
router.post('/upload',auth,uploadVideo);

export default router;