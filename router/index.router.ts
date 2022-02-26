import { Router } from 'express';
import { addUser, addData, seeAllUser, seeAllData, seeOneUser, seeOneData } from "../controller/index.controller"

const router = Router();

router.post('/add', addUser);
router.get('/get', seeAllUser);
router.get('/get/:id', seeOneUser);

router.post('/d/add', addData);
router.get('/d/get', seeAllData);
router.get('/d/get/:id', seeOneData);

export default router;