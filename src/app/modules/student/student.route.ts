import express from 'express';
import { StudentControllers } from './studnet.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudent);
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
