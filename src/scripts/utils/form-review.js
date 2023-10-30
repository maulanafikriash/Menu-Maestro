import RestaurantSource from '../data/restaurant-source';

const Reviews = (url, name, review) => {
  const datas = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.formReview(datas);

  const container = document.querySelector('#post-review');
  const times = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', times);

  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('customer-review__container');

  const nameElement = document.createElement('h4');
  nameElement.textContent = name;
  reviewContainer.appendChild(nameElement);

  const dateElement = document.createElement('p');
  dateElement.textContent = date;
  reviewContainer.appendChild(dateElement);

  const reviewElement = document.createElement('p');
  reviewElement.textContent = review;
  reviewContainer.appendChild(reviewElement);

  container.appendChild(reviewContainer);
};

export default Reviews;
