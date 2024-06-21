import express from 'express';
import {
    getUsers,
    signout,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);

export default router;