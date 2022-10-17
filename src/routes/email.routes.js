const router = require('express').Router()

const emailController = require('../controllers/email');

router.get('/', emailController.view)
router.post('/send', emailController.send)


module.exports = router;