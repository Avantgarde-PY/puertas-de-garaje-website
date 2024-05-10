// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Function to get a cookie value by name
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Reference the container where cards will be appended
  const container = document.getElementById('store');
  
  // Create a row element
  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
  
  // Get the current language from the cookie or default to English
  var language = getCookie('language') || 'es';
  
  // Fetch the JSON data
  function fetchAndUpdateCards() {
    fetch('cards.json')
      .then(response => response.json())
      .then(data => {
        // Clear the container
        row.innerHTML = '';
        // Generate the cards again with the new language
        data.forEach(cardData => {
          const card = document.createElement('div');
          card.classList.add('col-md-4', 'mb-3');
          card.innerHTML = `
            <div class="card">
              <img class="card-img-top" src="${cardData.image}" alt="">
              <div class="card-body">
                <h3 data-i18n="title">${cardData.title[language]}</h3>
                <p data-i18n="content">${cardData.content[language]}</p>
              </div>
              <div class="card-footer">
                <!--<a href="#" class="btn btn-primary" target="_blank">Discover more</a>-->
              </div>
            </div>
          `;
          row.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Initial fetch and update
  fetchAndUpdateCards();
  
  // Change the language when the user selects a different language from the dropdown
  $(".dropdown-item").click(function() {
    language = $(this).data("lang");
    // Set the language in the cookie
    setCookie('language', language, 30); // Remember language selection for 30 days
    // Fetch the data again to update the cards
    fetchAndUpdateCards();
  });