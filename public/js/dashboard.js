const newFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('#blog-title').value.trim();
	const description = document.querySelector('#blog-desc').value.trim();

	try {
		if (title && description) {
			const response = await fetch(`/api/blogs`, {
				method: 'POST',
				body: JSON.stringify({ title, description }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				document.location.replace('/dashboard');
			} else {
				const errorMessage = await response.text();
				alert(`Failed to create blog: ${errorMessage}`);
			}
		}
	} catch (error) {
		console.error('Error:', error);
		// Handle any other errors if necessary
	}
};

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
		const id = event.target.getAttribute('data-id');

		try {
			const response = await fetch(`/api/blogs/${id}`, {
				method: 'DELETE',
			});

			if (response.ok) {
				document.location.replace('/dashboard');
			} else {
				const errorMessage = await response.text();
				alert(`Failed to delete blog: ${errorMessage}`);
			}
		} catch (error) {
			console.error('Error:', error);
			// Handle any other errors if necessary
		}
	}
};

document
	.querySelector('.new-blog-form')
	.addEventListener('submit', newFormHandler);

document
	.querySelector('.blog-list')
	.addEventListener('click', delButtonHandler);
