const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(201).json(newBlog); 
  } catch (err) {
    res.status(400).json({ message: 'Failed to create blog post', error: err.message });
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }

    res.status(204).json(); 
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete blog post', error: err.message });
  }
});

module.exports = router;
