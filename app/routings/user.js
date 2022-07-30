const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');
const {createCategory, getCategory, createCategories} = require('../controllers/user');

router.post('/cat',createCategory);
router.post('/cats',createCategories);
router.get('/cat',getCategory);

module.exports = router;