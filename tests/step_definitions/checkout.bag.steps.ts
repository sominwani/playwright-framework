import { Given, When, Then } from '@cucumber/cucumber'
import {CustomWorld, ICustomWorld} from './custom.world'
import {ProductListingPage} from "../pages/product.listing.page";
import {ProductPage} from "../pages/product.page";
import {CheckoutBagPage} from "../pages/checkout.bag.page";
import {HomePage} from "../pages/home.page";


Then(/^assert all fields exists on checkout page including product name "(.*)" bag total of "(.*)"$/, {timeout: 60 * 1000},
    async function (this: ICustomWorld, productName: string, bagTotal: string) {
  const checkoutBagPage = new CheckoutBagPage(this.page!);
  await checkoutBagPage.assertObjectsOnCheckoutPage(productName, bagTotal);
});

When(/^customer clicks on continue to details button$/, {timeout: 60 * 1000}, async function (this: ICustomWorld) {
  const checkoutBagPage = new CheckoutBagPage(this.page!);
  await checkoutBagPage.clickOnContinueToDetails();
});

When(/^customer clicks on click and collect button$/, {timeout: 60 * 1000}, async function (this: ICustomWorld) {
  const checkoutBagPage = new CheckoutBagPage(this.page!);
  await checkoutBagPage.clickOnClickAndCollect();
});

When(/^customer clicks on delivery button$/, {timeout: 60 * 1000}, async function (this: ICustomWorld) {
  const checkoutBagPage = new CheckoutBagPage(this.page!);
  await checkoutBagPage.clickOnDelivery();
});

When(/^assert shipping charge for delivery is "(.*)"$/, {timeout: 60 * 1000}, async function (this: ICustomWorld, shippingCharge: string) {
  const checkoutBagPage = new CheckoutBagPage(this.page!);
  await checkoutBagPage.assertDeliveryShipping(shippingCharge);
});