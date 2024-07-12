 // Function to get query parameter
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Initialize Swiper
  var swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    initialSlide: 0 // Default to the first slide
  });

  // Set the initial slide based on the query parameter
  const portfolioId = getQueryParam('id');
  if (portfolioId) {
    swiper.slideTo(portfolioId - 1); // Adjust slide index (0-based)
  }