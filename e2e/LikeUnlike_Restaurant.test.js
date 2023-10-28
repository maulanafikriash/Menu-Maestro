const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Like and Unlike Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const likingRestaurant = async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('.restaurant-item__content');
  I.seeElement('.restaurant-item__content');
  const firstRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstLinkResto = await I.grabAttributeFrom(firstRestaurant, 'href');
  I.amOnPage(firstLinkResto);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.restaurant-item');
  const likedRestaurant = await I.grabTextFrom('.restaurant-item__content h3');
  assert.strictEqual(firstRestaurantTitle, likedRestaurant);
};

// eslint-disable-next-line no-undef
Scenario('Showing empty liked restaurant', ({ I }) => {
  I.wait(3);
  I.seeElement('.content__heading');
  I.see('Restoran Favorit', '.content__heading');
});

// like
// eslint-disable-next-line no-undef
Scenario('Liking one restaurant', async ({ I }) => {
  I.wait(3);
  await likingRestaurant({ I });
});

// Unlike
// eslint-disable-next-line no-undef
Scenario('Unliking one restaurant', async ({ I }) => {
  I.wait(3);
  await likingRestaurant({ I });

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__content');
  I.click('.restaurant-item__content a');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Restoran Favorit', '.content__heading');
});
