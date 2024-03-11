const commentFormHandler = async (event) => {
    event.preventDefault();
  
    
    const { dataset, value } = document.querySelector('.new-comment-form');
    const { blogid: blog_id } = dataset;
    const comment_description = value.trim();
  
    if (comment_description) {
      try {
        await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ blog_id, comment_description }),
          headers: { 'Content-Type': 'application/json' }
        });
    
        document.location.reload();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);
  