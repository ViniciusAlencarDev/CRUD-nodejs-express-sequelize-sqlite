const router = require('express').Router()

// import controllers
const TeamController = require('./controllers/TeamController')
const UserController = require('./controllers/UserController')

// Team Controller
router.post('/team/create', TeamController.create)
router.get('/team/data', TeamController.data)
router.get('/team/listactive', TeamController.list_active)
router.get('/team/listinactive', TeamController.list_inactive)
router.post('/team/update', TeamController.update)
router.post('/team/delete', TeamController.delete)

// User Controller
router.post('/user/create', UserController.create)
router.get('/user/data', UserController.data)
router.get('/user/listactive', UserController.list_active)
router.get('/user/listinactive', UserController.list_inactive)
router.post('/user/update', UserController.update)
router.post('/user/delete', UserController.delete)

module.exports = router
