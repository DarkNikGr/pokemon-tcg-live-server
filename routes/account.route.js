import {Router} from "express";
import {generateAccessToken} from "../controllers/account.controller.js";

const router = new Router();

router.post('/token/auth', generateAccessToken);
router.post('/token/register',generateAccessToken);

export default router;