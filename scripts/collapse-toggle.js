document.addEventListener('DOMContentLoaded', function() {
  const today = new Date();
  const opportunityCards = document.querySelectorAll('.opportunity-card');
  const accordionBody = document.querySelector('.accordion-body');

  // Function to move past opportunities to the accordion body
  function movePastOpportunities() {
    opportunityCards.forEach(card => {
      const deadlineText = card.querySelector('.deadline').textContent;
      const deadlineDate = new Date(deadlineText.replace('Deadline: ', '').trim());

      if (deadlineDate < today) {
        accordionBody.appendChild(card);
      }
    });
  }

  // Call the function to move past opportunities on page load
  movePastOpportunities();
});
