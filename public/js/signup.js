const signupFormHandler = async (event) => {
    try {
      event.preventDefault();
  
      const username = document.querySelector('#username-signup').value.trim();
      const password = document.querySelector('#password-signup').value.trim();
  
      if (username && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          const errorMessage = await response.text();
          alert(`Error: ${errorMessage}`);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);