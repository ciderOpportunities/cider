document.addEventListener('DOMContentLoaded', function() {
  const collapsible = document.querySelector('.collapsible');
  const content = document.querySelector('.collapsible-content');
  const today = new Date();
  const opportunityCards = document.querySelectorAll('.opportunity-card');

  // Function to move past opportunities to the collapsible content
  function movePastOpportunities() {
    opportunityCards.forEach(card => {
      const deadlineText = card.querySelector('.deadline').textContent;
      const deadlineDate = new Date(deadlineText.replace('Deadline: ', '').trim());

      if (deadlineDate < today) {
        content.appendChild(card);
      }
    });
  }

  // Call the function to move past opportunities on page load
  movePastOpportunities();

  // Add event listener to the collapsible button
  collapsible.addEventListener('click', function() {
    this.classList.toggle('active');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
