import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/display-template';

const RestaurantList = {
  async render() {
    return /* html */`
    <section class="hero">
      <picture>
        <source class="lazyload" media="(min-width:600px)" srcset="./images/heros/hero-image_2-large.jpg" type="image/jpg">
        <source class="lazyload" media="(max-width:600px)" srcset="./images/heros/hero-image_2-small.jpg" type="image/jpg">
        <img class="lazyload" data-src="./images/heros/hero-image_2.jpg" alt="Gambar Makanan Restoran" >
      </picture>
      <div class="overlay"></div>
        <div class="hero-text">
          <h1>Welcome...</h1>
        </div>
    </section>

    <div class="content" >
      <h2 tabindex="0" class="content-heading">Daftar Restoran</h2>
      <div id="restaurant" class="resto"></div>
    </div>
    
      `;
  },

  async afterRender() {
    const restaurantApi = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantApi.restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
