document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Validate fields
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const rating = document.getElementById('rating').value.trim();
      const comments = document.getElementById('comments').value.trim();
  
      if (!name || !email || !rating || !comments) {
        alert('Please fill out all fields before submitting.');
        return;
      }
  
      // Display thank-you message
      thankYouMessage.classList.remove('hidden');
      feedbackForm.reset();
    });
  });
  