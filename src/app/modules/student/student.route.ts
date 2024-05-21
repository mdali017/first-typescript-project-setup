import express from 'express';
import { StudentControllers } from './studnet.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
