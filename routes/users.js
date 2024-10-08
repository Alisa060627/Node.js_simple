const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.Controller.js');
router.get('/',userController.getUsers)
router.get('/:id/edit', userController.showEditUser);
router.post('/:id/edit', userController.upload.single('icon'), userController.editUser);
router.post('/new', userController.upload.single('icon'), userController.createUser);
router.get('/new',userController.showCreateUser)
router.post('/:id/delete',userController.deleteUser)
router.get('/:id',userController.getUser)
module.exports = router;