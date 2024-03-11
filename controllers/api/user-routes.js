const router = require('express').Router();
const { createUser, loginUser, logoutUser } = require('../../controllers/api/user-routes');

router.post('/', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;

