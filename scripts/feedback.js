ocument.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.getElementById('feedbackForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validate fields 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();

    const rating = document.querySelector('input[name="rating"]:checked');
    const ratingValue = rating ? rating.value : "No rating";
    if (!name || !email || !rating || !comments) {
      alert('Please fill out all fields before submitting.');
      return;
    } else {
      const data = { 'name': name, 'email': email, 'rating': rating, "comments": comments };
      window.localStorage.setItem('form-data', JSON.stringify(data));
      thankYouMessage.textContent = `Thank you for your feedback! ${ratingValue} stars.`;
      thankYouMessage.classList.remove('hidden');
      feedbackForm.reset();
    }
  });
});
