// Load header and footer from separate files
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('./components/header.html')
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.createElement('div');
      headerContainer.innerHTML = data;
      document.body.insertBefore(headerContainer.firstElementChild, document.body.firstChild);
    })
    .catch(err => console.log('Header load error:', err));
  
  // Load footer before copyrightText
  fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
      const footerContainer = document.createElement('div');
      footerContainer.innerHTML = data;
      const copyrightText = document.querySelector('.copyrightText');
      if (copyrightText) {
        document.body.insertBefore(footerContainer.innerHTML, copyrightText);
      } else {
        document.body.appendChild(footerContainer);
      }
    })
    .catch(err => console.log('Footer load error:', err));
});
