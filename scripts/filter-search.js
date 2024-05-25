$(function() {
  var availableTags = [
    "Internship", "Part-Time", "Full-Time", "Remote", "On-Site", "Hybrid", "Accounting", "Administration", "Agriculture",
    "Analytics", "Art", "Biotechnology", "Business Development", "Communications", "Construction", "Consulting",
    "Customer Service", "Data Science", "Design", "Education", "Engineering", "Entertainment", "Environmental Science",
    "Event Planning", "Finance", "Food Service", "Government", "Healthcare", "Hospitality", "Human Resources",
    "Information Technology", "Journalism", "Law", "Legal", "Logistics", "Management", "Manufacturing", "Marketing",
    "Media", "Medical", "Non-Profit", "Nursing", "Operations", "Pharmaceutical", "Photography", "Product Management",
    "Project Management", "Public Relations", "Quality Assurance", "Real Estate", "Research", "Retail", "Sales",
    "Science", "Social Media", "Software Development", "Sports", "Strategy", "Supply Chain", "Sustainability", "Teaching",
    "Telecommunications", "Transportation", "Travel", "Veterinary", "Video Production", "Web Development", "Writing",
    "Graphic Design", "Interior Design", "UX/UI Design", "Machine Learning", "Artificial Intelligence", "Blockchain",
    "Cloud Computing", "Cybersecurity", "Data Analysis", "DevOps", "E-commerce", "Electronics", "Energy", "FinTech",
    "Gaming", "Geology", "Humanities", "Insurance", "IoT", "Language Services", "Library Science", "Logistics and Supply Chain",
    "Marine Biology", "Mathematics", "Mechanical Engineering", "Mental Health", "Microbiology", "Nanotechnology",
    "Neuroscience", "Nutrition", "Oceanography", "Oil and Gas", "Paralegal", "Petroleum Engineering", "Philosophy",
    "Physics", "Physiotherapy", "Political Science", "Public Health", "Quantum Computing", "Robotics", "Sociology",
    "Statistics", "Textile Design", "Urban Planning", "Veterinary Medicine", "Zoology"
  ];

  $("#searchInput").autocomplete({
    source: availableTags
  });

  function performSearch() {
    const searchValue = $('#searchInput').val().toLowerCase();
    const cards = $('.opportunity-card');
    let hasResults = false;

    cards.each(function() {
      const cardText = $(this).text().toLowerCase();
      if (cardText.includes(searchValue)) {
        $(this).show();
        hasResults = true;
      } else {
        $(this).hide();
      }
    });

    const noResultsElement = $('.no-results');
    if (!hasResults) {
      if (noResultsElement.length === 0) {
        const noResultsMessage = $('<div class="no-results"><p>No opportunities found for the search term.</p></div>');
        $('.container').append(noResultsMessage);
      }
    } else {
      noResultsElement.remove();
    }

    showToast(hasResults ? `${$('.opportunity-card:visible').length} items found.` : '0 items found.', hasResults);
  }

  function showToast(message, success) {
    const toastElement = new bootstrap.Toast($('#searchToast'));
    const toastMessage = $('#toastMessage');
    toastMessage.text(message);
    toastMessage.css({
      'background-color': success ? '#d4edda' : '#f8d7da',
      'color': success ? '#155724' : '#721c24'
    });
    toastElement.show();
  }

  $('#searchButton').on('click', function() {
    performSearch();
  });

  $('#searchInput').on('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch();
    }
  });

  $('input[name="filter"]').on('change', function() {
    const filterValue = $(this).val();
    const cards = $('.opportunity-card');
    let hasResults = false;

    cards.each(function() {
      const card = $(this);
      if (filterValue === 'all' || card.hasClass(filterValue)) {
        card.show();
        hasResults = true;
      } else {
        card.hide();
      }
    });

    const noResultsElement = $('.no-results');
    if (!hasResults) {
      if (noResultsElement.length === 0) {
        const noResultsMessage = $('<div class="no-results"><p>No opportunities found for the selected filter.</p></div>');
        $('.container').append(noResultsMessage);
      }
    } else {
      noResultsElement.remove();
    }

    showToast(hasResults ? `${$('.opportunity-card:visible').length} items found.` : '0 items found.', hasResults);
  });

  $('#sortSelect').on('change', function() {
    sortCards();
  });

  function sortCards() {
    const sortValue = $('#sortSelect').val();
    const container = $('.container');
    const cards = $('.opportunity-card').get();

    cards.sort((a, b) => {
      const dateA = new Date($(a).data('date'));
      const dateB = new Date($(b).data('date'));
      if (sortValue === 'dateAsc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    $.each(cards, (i, card) => {
      container.append(card);
    });
  }
});
