$(function() {
  var availableTags = [
    "Agricultural Economics", "Agricultural Policy", "Agricultural Development", "Agribusiness", "Agri-finance",
    "Agroecology", "Agroforestry", "Animal Science", "Aquaculture", "Biotechnology", "Crop Science", "Environmental Economics",
    "Farm Management", "Food Security", "Food Systems", "Horticulture", "International Development", "Irrigation",
    "Land Use Planning", "Livestock Management", "Natural Resource Management", "Plant Breeding", "Rural Development",
    "Soil Science", "Sustainable Agriculture", "Agricultural Education", "Agricultural Engineering", "Agricultural Extension",
    "Agro-industry", "Climate Change Adaptation", "Community Development", "Development Economics", "Ecological Economics",
    "Fisheries Management", "Food Policy", "Gender and Development", "Global Health", "Humanitarian Aid", "International Trade",
    "Nutrition", "Organic Farming", "Pest Management", "Public Health", "Rural Sociology", "Social Entrepreneurship",
    "Value Chain Development", "Water Resource Management", "Wildlife Conservation","Policy"
  ];

  $("#searchInput").autocomplete({
    source: availableTags
  });

  function performSearch() {
    const searchValue = $('#searchInput').val().toLowerCase();
    const filterValue = $('input[name="filter"]:checked').val();
    const cards = $('.opportunity-card');
    let hasResults = false;

    cards.each(function() {
      const cardText = $(this).text().toLowerCase();
      const card = $(this);
      if (cardText.includes(searchValue) && (filterValue === 'all' || card.hasClass(filterValue))) {
        card.show();
        hasResults = true;
      } else {
        card.hide();
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

    const resultCount = $('.opportunity-card:visible').length;
    const resultMessage = resultCount === 1 ? '1 opportunity found.' : `${resultCount} opportunities found.`;
    showToast(hasResults ? resultMessage : 'No opportunities found.', hasResults);
  }

  function showToast(message, success) {
    const toastElement = new bootstrap.Toast($('#searchToast'));
    const toastMessage = $('#toastMessage');
    const toastIcon = $('#toastIcon');
    toastMessage.text(message);
    if (success) {
      $('#searchToast').removeClass('toast-error toast-info').addClass('toast-success');
      toastIcon.html('<i class="bi bi-check-circle-fill toast-icon"></i>');
    } else {
      $('#searchToast').removeClass('toast-success toast-info').addClass('toast-error');
      toastIcon.html('<i class="bi bi-exclamation-triangle-fill toast-icon"></i>');
    }
    toastElement.show();
  }

  $('#searchInput').on('input', function() {
    performSearch();
  });

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
    performSearch();
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

  $('.opportunity-card').on('click', function() {
    const modalId = $(this).find('.btn-primary').data('bs-target');
    $(modalId).modal('show');
  });
});

