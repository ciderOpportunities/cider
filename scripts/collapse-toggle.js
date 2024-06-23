document.addEventListener('DOMContentLoaded', function() {
    var collapsible = document.querySelector('.collapsible');
    var content = document.querySelector('.collapsible-content');
  
    collapsible.addEventListener('click', function() {
      this.classList.toggle('active');
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
  