const router = require('express').Router();
const { createBlog, deleteBlog } = require('../../controllers/api/blog-routes');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, createBlog);
router.delete('/:id', withAuth, deleteBlog);

module.exports = router;

