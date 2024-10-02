import {Router} from "express";
import {query, serviceInfo} from "../controllers/gameServer.controller.js";

const router = new Router();

router.post('/service/info', serviceInfo);
router.post('/query', query);

export default router;