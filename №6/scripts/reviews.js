document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".reviews__preloader");
  const reviewsContainer = document.querySelector(".reviews__container");
  const errorContainer = document.querySelector(".reviews__error");

  function fetchReviews() {
    showPreloader();
    errorContainer.textContent = "";
    reviewsContainer.innerHTML = "";

    const randomFilter = Math.random() > 0.5 ? "?id_lte=20" : "?id_gte=480";

    fetch(`https://jsonplaceholder.typicode.com/comments${randomFilter}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((reviews) => {
        renderReviews(reviews);
      })
      .catch((error) => {
        console.error(error);
        showError("Что-то пошло не так");
      })
      .finally(() => {
        hidePreloader();
      });
  }

  function renderReviews(reviews) {
    if (reviews.length === 0) {
      showError("Нет данных для отображения");
      return;
    }

    reviews.forEach((review) => {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("reviews__item");
      reviewItem.innerHTML = `
                <h3 class="reviews__name">${review.name}</h3>
                <p class="reviews__body">${review.body}</p>
                <p class="reviews__email">${review.email}</p>
            `;
      reviewsContainer.appendChild(reviewItem);
    });
  }

  function showPreloader() {
    preloader.style.display = "block";
  }

  function hidePreloader() {
    preloader.style.display = "none";
  }

  function showError(message) {
    errorContainer.textContent = message;
  }

  fetchReviews();
});
