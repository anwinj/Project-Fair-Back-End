const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfiq = require('../Middlewares/multerMiddleware')

// route for register
router.post('/register',userController.register)

// route for login
router.post('/login',userController.login)

// route for add project
router.post('/add-project',jwtMiddleware,multerConfiq.single('projectImage'),projectController.addProject)

// route for get home project
router.get('/home-projects',projectController.getHomeProjects)

// route for get all project
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

// route for get user project
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

// route for edit project
router.put('/project/edit/:pid',jwtMiddleware,multerConfiq.single("projectImage"),projectController.editProject)

// route for delete project
router.delete('/project/delete/:pid',jwtMiddleware,projectController.removeProject)

// route for edit user profile
router.put('/user/edit',jwtMiddleware,multerConfiq.single("profileImage"),userController.editUser)

module.exports = router