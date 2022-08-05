import  express  from 'express';
import { createUser, deleteUser, getAllusers, getUser, updateUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/',getAllusers)
router.get('/:id',getUser)
router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

export default router;