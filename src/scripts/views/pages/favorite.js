import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/display-template';

const Favorite = {
  async render() {
    return /* html */`
    <div class="content">
      <h2 tabindex="0" class="content__heading">Restoran Favorit</h2>
      <div id="restaurant" class="resto">
      </div>
    </div>

        `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#restaurant');

    if (resto.length === 0) {
      const emptyStateImage = document.createElement('img');
      emptyStateImage.src = './images/image-null.jpg';
      emptyStateImage.alt = 'Ilustrasi Restoran Kosong';
      restoContainer.appendChild(emptyStateImage);
    } else {
      restoContainer.innerHTML = '';
      // Tampilkan daftar restoran favorit
      resto.forEach((res) => {
        restoContainer.innerHTML += createRestaurantItemTemplate(res);
      });
    }
  },
};

export default Favorite;
