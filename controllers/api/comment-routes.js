const router = require('express').Router();
const { createComment, deleteComment } = require('../../controllers/api/comment-routes');
const withAuth = require('../../utils/auth');

router.get('/', getAllComments);
router.get('/:id', getCommentById);
router.post('/', withAuth, createComment);
router.delete('/:id', withAuth, deleteComment);

module.exports = router;

