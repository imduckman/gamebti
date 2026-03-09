document.addEventListener('DOMContentLoaded', function () {
  function toFragment(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.cloneNode(true);
  }

  fetch('./components/header.html')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Header fetch failed: ' + response.status);
      }
      return response.text();
    })
    .then(function (data) {
      const headerPlaceholder = document.querySelector('#header');
      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
        return;
      }

      if (!document.querySelector('body > header')) {
        const headerFragment = toFragment(data);
        document.body.insertBefore(headerFragment, document.body.firstChild);
      }
    })
    .catch(function (err) {
      console.error('Header load error:', err);
    });

  fetch('./components/footer.html')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Footer fetch failed: ' + response.status);
      }
      return response.text();
    })
    .then(function (data) {
      const footerPlaceholder = document.querySelector('#footer');
      if (footerPlaceholder) {
        footerPlaceholder.innerHTML = data;
        return;
      }

      if (!document.querySelector('body > footer')) {
        const footerFragment = toFragment(data);
        document.body.appendChild(footerFragment);
      }
    })
    .catch(function (err) {
      console.error('Footer load error:', err);
    });
});
