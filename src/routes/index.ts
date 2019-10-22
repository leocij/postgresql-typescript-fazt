import { Router } from 'express'
import { getUser, getUserById, createUser, updateUser, deleteUser } from '../controllers/index.controller'

const router = Router()

router.get('/users', getUser)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router