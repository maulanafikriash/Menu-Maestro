// eslint-disable-next-line no-undef
Feature('Add Review Restaurant');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/');
});

// eslint-disable-next-line no-undef
Scenario('Review on restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);
  I.seeElement('.restaurant-item');

  let firstRestaurantTitle;
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant-item__header').first();
  // eslint-disable-next-line prefer-const, no-unused-vars
  firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.seeElement('.restaurant-item__content h3 a');
  // eslint-disable-next-line no-undef
  I.click(locate('.restaurant-item__content h3 a').first());
  I.wait(3);

  I.seeElement('form');
  I.fillField('Nama', 'mySelf');
  I.fillField('Review', 'Testing');
  I.click('#submit-review');
  I.acceptPopup();
  I.see('Testing', '.customer-review__container');
});
