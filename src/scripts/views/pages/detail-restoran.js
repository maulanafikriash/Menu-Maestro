/* eslint-disable no-alert */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/display-template';
import LikeButtonSettings from '../../utils/like-button-settings';
import Reviews from '../../utils/form-review';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const RestaurantDetails = {
  async render() {
    return /* html */`
    <div id="skeleton"> 
    <h2 class="skeleton-ui"></h2>
    <img class="skeleton-ui__poster" alt="" />
    <div class="skeleton-ui__info">
      <h4></h4>
      <p></p>
      <h4></h4>
      <p></p>
    </div>
    <div class="skeleton-ui__description">
      <h3></h3>
      <p></p>
    </div>
    </div>


    <div id="restaurant" class="restaurant" tabindex="0"></div>
    <div id="likeButtonContainer" tabindex="0"></div>

    <!-- Form submit review-->
    <form id="review-form" class="form-review">
    <h3 tabindex="0">Buat Review</h3>
        <label for="name">Nama:</label>
        <input type="text" id="name" name="name" required>

        <label for="review">Review:</label>
        <textarea id="review" name="review" rows="4" required></textarea>

        <button type="submit" id="submit-review">Kirim</button>
    </form>

        `;
  },

  async afterRender() {
    const skeleton = document.getElementById('skeleton');
    const restoContainer = document.querySelector('#restaurant');
    const reviewForm = document.querySelector('#review-form');

    // Tampilkan Skeleton UI
    skeleton.style.display = 'block';
    restoContainer.style.display = 'none';
    reviewForm.style.display = 'none';

    const loadRestaurantDetails = async () => {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      let resto = await RestaurantSource.detail(url.id);
      resto = resto.restaurant;

      const nameInput = document.querySelector('#name');
      const reviewInput = document.querySelector('#review');
      const submitButton = document.querySelector('#submit-review');

      function handleSubmitReview() {
        const name = nameInput.value;
        const review = reviewInput.value;

        if (name === '' || review === '') {
          alert('Periksa kembali nama dan teks review, tidak boleh kosong!!');
        } else if (navigator.onLine) {
          console.log('online');
          alert('Pesan Terkirim');
          Reviews(url, name, review);
        } else {
          console.log('offline');
          alert('Tidak Ada Internet');
        }

        nameInput.value = '';
        reviewInput.value = '';
      }

      submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleSubmitReview();
      });

      setTimeout(() => {
        skeleton.style.display = 'none';
        restoContainer.style.display = 'grid';
        reviewForm.style.display = 'block';

        restoContainer.innerHTML = createRestaurantDetailTemplate(resto);

        LikeButtonSettings.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          favoriteResto: FavoriteRestaurantIdb,
          restaurant: {
            id: resto.id,
            name: resto.name,
            description: resto.description,
            city: resto.city,
            rating: resto.rating,
            pictureId: resto.pictureId,
          },
        });
      }, 2000);
    };

    loadRestaurantDetails();
  },
};

export default RestaurantDetails;
