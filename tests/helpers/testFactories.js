import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonSettings from '../../src/scripts/utils/like-button-settings';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonSettings.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestaurantIdb,
    restaurant,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
